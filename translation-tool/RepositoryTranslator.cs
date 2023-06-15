namespace Devolutions.TranslationTool;

using System.IO;
using System.Text;
using System.Text.RegularExpressions;

using DeepL;

using LibGit2Sharp;

using Markdig;

public sealed partial class RepositoryTranslator
{
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

    public RepositoryTranslator(string deeplAuthenticationKey, string sourceLanguageCode, string[] targetLanguageCodes, int maxTranslatedFileCount = int.MaxValue)
    {
        if (maxTranslatedFileCount < 1)
        {
            throw new ArgumentOutOfRangeException(nameof(maxTranslatedFileCount));
        }

        this.deeplAuthenticationKey = deeplAuthenticationKey ?? throw new ArgumentNullException(nameof(deeplAuthenticationKey));
        this.sourceLanguageCode = sourceLanguageCode ?? throw new ArgumentNullException(nameof(sourceLanguageCode));
        this.targetLanguageCodes = targetLanguageCodes ?? throw new ArgumentNullException(nameof(targetLanguageCodes));
        this.maxTranslatedFileCount = maxTranslatedFileCount;
    }

    public async Task Execute()
    {
        string repositoryPath = this.GetRepositoryPath();
        SourceLanguage sourceLanguage = this.GetSourceLanguage(repositoryPath);
        TargetLanguage[] targetLanguages = await this.GetTargetLanguages(repositoryPath, sourceLanguage).ConfigureAwait(false);
        MarkdownPipeline markdownPipeline = new MarkdownPipelineBuilder().UseAdvancedExtensions().Build();
        using Translator deeplTranslator = new(this.deeplAuthenticationKey, this.deeplTranslatorOptions);
        TranslatedFileCounter translatedFileCounter = new(this.maxTranslatedFileCount);
        foreach (TargetLanguage targetLanguage in targetLanguages)
        {
            LanguageTranslator languageTranslator = new(this.targetEncoding, targetLanguage, markdownPipeline, deeplTranslator, translatedFileCounter);
            await languageTranslator.Execute().ConfigureAwait(false);
            if (translatedFileCounter.MaximumReached)
            {
                break;
            }
        }
    }

    private string GetRepositoryPath()
    {
        string directoryPath = Directory.GetCurrentDirectory();
        DirectoryInfo? directoryInfo = new(directoryPath);
        do
        {
            directoryPath = directoryInfo.FullName;
            if (Directory.Exists(Path.Combine(directoryInfo.FullName, "docs")))
            {
                return directoryPath;
            }

            directoryInfo = directoryInfo.Parent;
        }
        while (directoryInfo != null);
        throw new InvalidOperationException("Current directory is not within the expected repository");
    }

    private SourceLanguage GetSourceLanguage(string repositoryPath)
    {
        SourceLanguage sourceLanguage = new(this.sourceLanguageCode, Path.Combine(repositoryPath, "docs", this.sourceLanguageCode));
        sourceLanguage.Files = GetSourceFiles(repositoryPath, sourceLanguage);
        return sourceLanguage;
    }

    private static SourceFile[] GetSourceFiles(string repositoryPath, SourceLanguage sourceLanguage)
    {
        string[] sourceFilePaths = Directory.GetFiles(sourceLanguage.DirectoryPath, "*.md", SearchOption.AllDirectories);

        using Repository repository = new(repositoryPath);
        Commit latestCommit = repository.Head.Tip;

        List<SourceFile> result = new(sourceFilePaths.Length);
        foreach (string sourceFilePath in sourceFilePaths)
        {
            string? latestCommitFromGit = GetLatestCommitFromGit(repositoryPath, latestCommit, sourceFilePath);
            if (latestCommitFromGit != null)
            {
                result.Add(new SourceFile(sourceLanguage, sourceFilePath, latestCommitFromGit));
            }
        }

        return result.ToArray();
    }

    private static string? GetLatestCommitFromGit(string repositoryPath, Commit latestCommit, string filePath)
    {
        string relativeFilePath = filePath.Replace(repositoryPath, string.Empty, StringComparison.OrdinalIgnoreCase)
            .Replace('\\', '/').TrimStart('/');

        Commit commit = latestCommit;
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

    private async Task<TargetLanguage[]> GetTargetLanguages(string repositoryPath, SourceLanguage sourceLanguage)
    {
        List<TargetLanguage> result = new(this.targetLanguageCodes.Length);
        foreach (string targetLanguageCode in this.targetLanguageCodes)
        {
            string directoryPath = Path.Combine(repositoryPath, "docs", $"{targetLanguageCode}.generated");
            string cacheFilePath = Path.Combine(repositoryPath, ".translation-tool", $"{sourceLanguage.Code}-{targetLanguageCode}-cache.json");
            TargetLanguage targetLanguage = new(sourceLanguage, targetLanguageCode, directoryPath, cacheFilePath);
            targetLanguage.Files = await this.GetTargetFiles(sourceLanguage, targetLanguage).ConfigureAwait(false);
            result.Add(targetLanguage);
        }

        return result.ToArray();
    }

    private async Task<TargetFile[]> GetTargetFiles(SourceLanguage sourceLanguage, TargetLanguage targetLanguage)
    {
        List<TargetFile> result = new(sourceLanguage.Files.Length);
        foreach (SourceFile sourceFile in sourceLanguage.Files)
        {
            string targetFilePath = sourceFile.FilePath.Replace(sourceFile.Language.DirectoryPath, targetLanguage.DirectoryPath, StringComparison.OrdinalIgnoreCase);
            string? latestCommitFromFileHeader = await this.GetLatestCommitFromFileHeader(targetFilePath).ConfigureAwait(false);
            if (latestCommitFromFileHeader == null || !string.Equals(sourceFile.LatestCommit, latestCommitFromFileHeader, StringComparison.Ordinal))
            {
                result.Add(new TargetFile(sourceFile, targetLanguage, targetFilePath));
            }
        }

        return result.ToArray();
    }

    private async Task<string?> GetLatestCommitFromFileHeader(string filePath)
    {
        if (!File.Exists(filePath))
        {
            return null;
        }

        string content = await File.ReadAllTextAsync(filePath, this.targetEncoding).ConfigureAwait(false);
        Match match = GetLatestCommitRegex().Match(content);
        return match.Success ? match.Groups[1].Value : null;
    }

    [GeneratedRegex(@"^latestCommit: *(\S+)", RegexOptions.CultureInvariant | RegexOptions.Multiline)]
    private static partial Regex GetLatestCommitRegex();
}