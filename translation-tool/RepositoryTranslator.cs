namespace Devolutions.TranslationTool;

using System.IO;
using System.Text;
using System.Text.RegularExpressions;

using DeepL;

using LibGit2Sharp;

using Markdig;

public sealed partial class RepositoryTranslator
{
    private readonly ProgramOptions options;
    private readonly string deeplAuthenticationKey;
    private readonly string sourceLanguageCode;
    private readonly string[] targetLanguageCodes;
    private readonly int maxTranslatedFileCount;
    private readonly Encoding targetEncoding = new UTF8Encoding(false, true);
    private readonly TranslatorOptions deeplTranslatorOptions = new()
    {
        appInfo = new AppInfo { AppName = "Devolutions.TranslationTool", AppVersion = "1.0.0" },
        MaximumNetworkRetries = 3,
        OverallConnectionTimeout = TimeSpan.FromSeconds(60d),
        PerRetryConnectionTimeout = TimeSpan.FromSeconds(30d),
        sendPlatformInfo = true
    };

    public RepositoryTranslator(ProgramOptions options)
    {
        this.options = options ?? throw new ArgumentNullException(nameof(options));
        if (options.MaxTranslatedFileCount < 1)
        {
            throw new ArgumentOutOfRangeException($"{nameof(options)}.{nameof(options.MaxTranslatedFileCount)}");
        }

        this.deeplAuthenticationKey = options.DeeplAuthenticationKey ?? throw new ArgumentNullException($"{nameof(options)}.{nameof(options.DeeplAuthenticationKey)}");
        this.sourceLanguageCode = options.SourceLanguageCode ?? throw new ArgumentNullException($"{nameof(options)}.{nameof(options.SourceLanguageCode)}");
        this.targetLanguageCodes = (options.TargetLanguageCodes ?? throw new ArgumentNullException($"{nameof(options)}.{nameof(options.TargetLanguageCodes)}")).ToArray();
        this.maxTranslatedFileCount = options.MaxTranslatedFileCount;
    }

    public async Task ExecuteAsync()
    {
        string repositoryPath = GetRepositoryPath();
        string contentDirectoryName = GetContentDirectoryName(repositoryPath);

        TargetLanguage[] targetLanguages;
        using (Repository repository = new(repositoryPath))
        {
            Commit repositoryHeadTip = repository.Head.Tip;
            SourceLanguage sourceLanguage = await this.GetSourceLanguageAsync(repositoryPath, repositoryHeadTip, contentDirectoryName).ConfigureAwait(false);
            targetLanguages = await this.GetTargetLanguagesAsync(repositoryPath, repositoryHeadTip, contentDirectoryName, sourceLanguage).ConfigureAwait(false);
        }

        if (targetLanguages.Length == 0)
        {
            await Console.Out.WriteLineAsync("No file to translate").ConfigureAwait(false);
            await Console.Out.FlushAsync().ConfigureAwait(false);
            return;
        }

        MarkdownPipeline markdownPipeline = new MarkdownPipelineBuilder().UseAdvancedExtensions().Build();
        using Translator deeplTranslator = new(this.deeplAuthenticationKey, this.deeplTranslatorOptions);
        TranslatedFileCounter translatedFileCounter = new(this.maxTranslatedFileCount);
        foreach (TargetLanguage targetLanguage in targetLanguages)
        {
            LanguageTranslator languageTranslator = new(this.targetEncoding, targetLanguage, markdownPipeline, deeplTranslator, translatedFileCounter);
            await languageTranslator.ExecuteAsync().ConfigureAwait(false);
            if (translatedFileCounter.MaximumReached)
            {
                break;
            }
        }
    }

    private static string GetRepositoryPath()
    {
        string directoryPath = Directory.GetCurrentDirectory();
        DirectoryInfo? directoryInfo = new(directoryPath);
        do
        {
            directoryPath = directoryInfo.FullName;
            if (Directory.Exists(Path.Combine(directoryPath, "translation-tool")))
            {
                return directoryPath;
            }

            directoryInfo = directoryInfo.Parent;
        }
        while (directoryInfo != null);
        throw new InvalidOperationException("Current directory is not within the expected repository");
    }

    private static string GetContentDirectoryName(string repositoryPath) =>
        GetContentDirectoryName(repositoryPath, "content") ??
        GetContentDirectoryName(repositoryPath, "docs") ??
        throw new InvalidOperationException("Content directory has not been found");

    private static string? GetContentDirectoryName(string repositoryPath, string contentDirectoryName) =>
        Directory.Exists(Path.Combine(repositoryPath, contentDirectoryName)) ? contentDirectoryName : null;

    private async Task<SourceLanguage> GetSourceLanguageAsync(string repositoryPath, Commit repositoryHeadTip, string contentDirectoryName)
    {
        SourceLanguage sourceLanguage = new(this.sourceLanguageCode, Path.Combine(repositoryPath, contentDirectoryName, this.sourceLanguageCode));
        sourceLanguage.Files = await GetSourceFilesAsync(repositoryPath, repositoryHeadTip, sourceLanguage).ConfigureAwait(false);
        return sourceLanguage;
    }

    private static async Task<SourceFile[]> GetSourceFilesAsync(string repositoryPath, Commit repositoryHeadTip, SourceLanguage sourceLanguage)
    {
        string[] sourceFilePaths = Directory.GetFiles(sourceLanguage.DirectoryPath, "*.md", SearchOption.AllDirectories);

        List<SourceFile> result = new(sourceFilePaths.Length);
        foreach (string sourceFilePath in sourceFilePaths)
        {
            string? latestCommitFromGit = GetLatestCommitFromGit(repositoryPath, repositoryHeadTip, sourceFilePath);
            if (latestCommitFromGit != null && !(await IsSourceFileExcludedAsync(sourceFilePath).ConfigureAwait(false)))
            {
                result.Add(new SourceFile(sourceLanguage, sourceFilePath, latestCommitFromGit));
            }
        }

        return result.ToArray();
    }

    private static string? GetLatestCommitFromGit(string repositoryPath, Commit repositoryHeadTip, string filePath)
    {
        string relativeFilePath = filePath.Replace(repositoryPath, string.Empty, StringComparison.OrdinalIgnoreCase)
            .Replace('\\', '/').TrimStart('/');

        Commit commit = repositoryHeadTip;
        GitObject? gitObject = commit[relativeFilePath]?.Target;
        if (gitObject == null)
        {
            return null;
        }

        HashSet<string> hashSet = new();
        Queue<Commit> queue = new();
        queue.Enqueue(commit);
        hashSet.Add(commit.Sha);

        while (queue.Count > 0)
        {
            commit = queue.Dequeue();
            bool dequeue = false;
            foreach (Commit parent in commit.Parents)
            {
                TreeEntry? treeEntry = parent[relativeFilePath];
                if (treeEntry == null)
                {
                    continue;
                }

                bool equals = string.Equals(treeEntry.Target.Sha, gitObject.Sha, StringComparison.Ordinal);
                if (equals && hashSet.Add(parent.Sha))
                {
                    queue.Enqueue(parent);
                }

                dequeue = dequeue || equals;
            }

            if (!dequeue)
            {
                break;
            }
        }

        return commit.Sha;
    }

    private static async Task<bool> IsSourceFileExcludedAsync(string filePath)
    {
        string content = await File.ReadAllTextAsync(filePath).ConfigureAwait(false);
        return NoDeepLRegex().IsMatch(content);
    }

    [GeneratedRegex(@"^ *noDeepL:", RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Multiline)]
    private static partial Regex NoDeepLRegex();

    private async Task<TargetLanguage[]> GetTargetLanguagesAsync(string repositoryPath, Commit repositoryHeadTip, string contentDirectoryName, SourceLanguage sourceLanguage)
    {
        List<TargetLanguage> result = new(this.targetLanguageCodes.Length);
        foreach (string targetLanguageCode in this.targetLanguageCodes)
        {
            string directoryPath = Path.Combine(repositoryPath, contentDirectoryName, $"{targetLanguageCode}.generated");
            (string? glossaryFilePath, string? glossaryLatestCommit) = FindGlossary(repositoryPath, repositoryHeadTip, sourceLanguage, targetLanguageCode);
            string cacheFilePath = Path.Combine(repositoryPath, ".translation-tool", glossaryLatestCommit != null ?
                $"{sourceLanguage.Code}-{targetLanguageCode}-{glossaryLatestCommit}-cache.json" : $"{sourceLanguage.Code}-{targetLanguageCode}-cache.json");
            TargetLanguage targetLanguage = new(sourceLanguage, targetLanguageCode, directoryPath, glossaryFilePath, glossaryLatestCommit, cacheFilePath);
            targetLanguage.Files = await this.GetTargetFilesAsync(sourceLanguage, targetLanguage).ConfigureAwait(false);
            if (targetLanguage.Files.Length > 0)
            {
                result.Add(targetLanguage);
            }
        }

        return result.ToArray();
    }

    private static (string? glossaryFilePath, string? glossaryLatestCommit) FindGlossary(string repositoryPath, Commit repositoryHeadTip, SourceLanguage sourceLanguage, string targetLanguageCode)
    {
        string glossaryFilePath = Path.Combine(repositoryPath, "glossaries", $"{sourceLanguage.Code}-{targetLanguageCode}.csv");
        if (File.Exists(glossaryFilePath))
        {
            string? glossaryLatestCommit = GetLatestCommitFromGit(repositoryPath, repositoryHeadTip, glossaryFilePath);
            if (glossaryLatestCommit != null)
            {
                return (glossaryFilePath, glossaryLatestCommit);
            }
        }

        return (null, null);
    }

    private async Task<TargetFile[]> GetTargetFilesAsync(SourceLanguage sourceLanguage, TargetLanguage targetLanguage)
    {
        List<TargetFile> result = new(sourceLanguage.Files.Length);
        foreach (SourceFile sourceFile in sourceLanguage.Files)
        {
            string targetFilePath = sourceFile.FilePath.Replace(sourceFile.Language.DirectoryPath, targetLanguage.DirectoryPath, StringComparison.OrdinalIgnoreCase);
            if (this.options.Force)
            {
                result.Add(new TargetFile(sourceFile, targetLanguage, targetFilePath));
                continue;
            }

            (string? latestCommitFromFileHeader, string? glossaryLatestCommitFromFileHeader) = await this.ReadTargetFileHeaderAsync(targetFilePath).ConfigureAwait(false);
            if (latestCommitFromFileHeader == null ||
                !string.Equals(sourceFile.LatestCommit, latestCommitFromFileHeader, StringComparison.Ordinal) ||
                !string.Equals(targetLanguage.GlossaryLatestCommit, glossaryLatestCommitFromFileHeader, StringComparison.OrdinalIgnoreCase))
            {
                result.Add(new TargetFile(sourceFile, targetLanguage, targetFilePath));
            }
        }

        return result.ToArray();
    }

    private async Task<(string? latestCommit, string? glossaryLatestCommit)> ReadTargetFileHeaderAsync(string filePath)
    {
        if (!File.Exists(filePath))
        {
            return (null, null);
        }

        string content = await File.ReadAllTextAsync(filePath, this.targetEncoding).ConfigureAwait(false);
        Match latestCommitMatch = LatestCommitRegex().Match(content);
        string? latestCommit = latestCommitMatch.Success ? latestCommitMatch.Groups[1].Value : null;
        Match glossaryLatestCommitMatch = GlossaryLatestCommitRegex().Match(content);
        string? glossaryLatestCommit = glossaryLatestCommitMatch.Success ? glossaryLatestCommitMatch.Groups[1].Value : null;
        return (latestCommit, glossaryLatestCommit);
    }

    [GeneratedRegex($@"^latestCommit: *({RegexPatterns.NonWhitespace}+)", RegexOptions.CultureInvariant | RegexOptions.Multiline)]
    private static partial Regex LatestCommitRegex();

    [GeneratedRegex($@"^glossaryLatestCommit: *({RegexPatterns.NonWhitespace}+)", RegexOptions.CultureInvariant | RegexOptions.Multiline)]
    private static partial Regex GlossaryLatestCommitRegex();
}