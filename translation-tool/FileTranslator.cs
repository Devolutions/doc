﻿namespace Devolutions.TranslationTool;

using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;

using DeepL;
using DeepL.Model;

using Markdig;
using Markdig.Syntax;

using Renderers;

internal sealed partial class FileTranslator
{
    private const int TranslationsInitialCapacity = 1024;
    private const int SubstitutionsInitialCapacity = 1024;

    private readonly Encoding targetEncoding;
    private readonly TargetFile targetFile;
    private readonly MarkdownPipeline markdownPipeline;
    private readonly Translator deeplTranslator;
    private readonly TextTranslateOptions deeplTextTranslateOptions;
    private readonly Dictionary<string, string> completedTranslations;

    private string sourceFileContent = null!;
    private string sourceFileEOL = null!;
    private Dictionary<string, DeeplTranslation> translations = null!;
    private Dictionary<int, ISubstitution> substitutions = null!;
    private string sourceFileContentWithoutHeader = null!;
    private string targetFileHeader = null!;
    private string nonTranslatedTargetFileContentWithoutHeader = null!;
    private string targetFileContent = null!;

    public FileTranslator(Encoding targetEncoding, TargetFile targetFile, MarkdownPipeline markdownPipeline, Translator deeplTranslator,
        TextTranslateOptions deeplTextTranslateOptions, Dictionary<string, string> completedTranslations)
    {
        this.targetEncoding = targetEncoding ?? throw new ArgumentNullException(nameof(targetEncoding));
        this.targetFile = targetFile ?? throw new ArgumentNullException(nameof(targetFile));
        this.markdownPipeline = markdownPipeline ?? throw new ArgumentNullException(nameof(markdownPipeline));
        this.deeplTranslator = deeplTranslator ?? throw new ArgumentNullException(nameof(deeplTranslator));
        this.deeplTextTranslateOptions = deeplTextTranslateOptions ?? throw new ArgumentNullException(nameof(deeplTextTranslateOptions));
        this.completedTranslations = completedTranslations ?? throw new ArgumentNullException(nameof(completedTranslations));
    }

    public async Task Execute()
    {
        await this.ReadSourceFile().ConfigureAwait(false);
        this.FindSourceFileEOL();
        this.ExtractHeaderFromSourceFile();
        this.ApplyHighLevelSubstitutions();
        await this.ParseSourceFile().ConfigureAwait(false);
        await this.Translate().ConfigureAwait(false);
        this.AssembleTargetFile();
        await this.WriteTargetFile().ConfigureAwait(false);
    }

    private async Task ReadSourceFile() =>
        this.sourceFileContent = await File.ReadAllTextAsync(this.targetFile.SourceFile.FilePath).ConfigureAwait(false);

    private void FindSourceFileEOL()
    {
        SourceFile sourceFile = this.targetFile.SourceFile;
        if (sourceFile.EOL == null)
        {
            Match match = FindEOLRegex().Match(this.sourceFileContent);
            sourceFile.EOL = match.Success ? match.Value : "\r\n";
        }

        this.sourceFileEOL = sourceFile.EOL;
    }

    [GeneratedRegex(@"\r?\n|\r", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex FindEOLRegex();

    private void ExtractHeaderFromSourceFile()
    {
        this.translations = new Dictionary<string, DeeplTranslation>(TranslationsInitialCapacity, StringComparer.Ordinal);
        this.substitutions = new Dictionary<int, ISubstitution>(SubstitutionsInitialCapacity);
        string latestCommitHeaderLine = $"latestCommit: {this.targetFile.SourceFile.LatestCommit}{this.sourceFileEOL}";
        string glossaryIDHeaderLine = this.targetFile.Language.GlossaryID != null ?
            $"glossaryID: {this.targetFile.Language.GlossaryID}{this.sourceFileEOL}" : string.Empty;
        Match headerMatch = GetHeaderRegex().Match(this.sourceFileContent);
        if (headerMatch.Success)
        {
            this.sourceFileContentWithoutHeader = this.sourceFileContent[headerMatch.Length..];

            string sourceFileHeaderPart1 = headerMatch.Groups[1].Value;
            string sourceFileHeaderPart2 = headerMatch.Groups[2].Value;

            string targetFileHeaderPart1 = TitleLineRegex().Replace(sourceFileHeaderPart1, this.ReplaceTitleLineRegex, 1);
            targetFileHeaderPart1 = DescriptionLineRegex().Replace(targetFileHeaderPart1, this.ReplaceDescriptionLineRegex, 1);
            targetFileHeaderPart1 = KeywordLinesRegex().Replace(targetFileHeaderPart1, this.ReplaceKeywordLinesRegex, 1);
            targetFileHeaderPart1 = LatestCommitLineRegex().Replace(targetFileHeaderPart1, this.sourceFileEOL, 1);
            targetFileHeaderPart1 = GlossaryIDRegex().Replace(targetFileHeaderPart1, this.sourceFileEOL, 1);
            this.targetFileHeader = $"{targetFileHeaderPart1}{latestCommitHeaderLine}{glossaryIDHeaderLine}{sourceFileHeaderPart2}";
        }
        else
        {
            this.sourceFileContentWithoutHeader = this.sourceFileContent;
            this.targetFileHeader = $"---{this.sourceFileEOL}{latestCommitHeaderLine}{glossaryIDHeaderLine}---{this.sourceFileEOL}";
        }
    }

    [GeneratedRegex(@"^(---(?:\r?\n|\r).*?(?:\r?\n|\r))(---(?:(?:\r?\n|\r)+|$))", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex GetHeaderRegex();

    [GeneratedRegex(@"(?:\r?\n|\r)( *title:)([^\r\n]*)(?:\r?\n|\r)", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex TitleLineRegex();

    private string ReplaceTitleLineRegex(Match match)
    {
        string title = match.Groups[2].Value.Trim();
        if (string.IsNullOrEmpty(title))
        {
            return this.sourceFileEOL;
        }

        string label = match.Groups[1].Value;
        title = this.ProcessSourceFileText(title);
        return $"{this.sourceFileEOL}{label} {title}{this.sourceFileEOL}";
    }

    [GeneratedRegex(@"(?:\r?\n|\r)( *description:)([^\r\n]*)(?:\r?\n|\r)", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex DescriptionLineRegex();

    private string ReplaceDescriptionLineRegex(Match match)
    {
        string description = match.Groups[2].Value.Trim();
        if (string.IsNullOrEmpty(description))
        {
            return this.sourceFileEOL;
        }

        string label = match.Groups[1].Value;
        description = this.ProcessSourceFileText(description);
        return $"{this.sourceFileEOL}{label} {description}{this.sourceFileEOL}";
    }

    [GeneratedRegex(@"(?:\r?\n|\r)( *keywords:)[^\r\n]*(?:\r?\n|\r)(?:( *-)([^\r\n]*)(?:\r?\n|\r))*", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex KeywordLinesRegex();

    private string ReplaceKeywordLinesRegex(Match match)
    {
        CaptureCollection keywordCaptures = match.Groups[3].Captures;
        if (keywordCaptures.Count == 0)
        {
            return this.sourceFileEOL;
        }

        bool atLeastOneKeyword = false;
        StringBuilder keywordLinesBuilder = new(512);
        string label = match.Groups[1].Value;
        CaptureCollection bulletCaptures = match.Groups[2].Captures;
        keywordLinesBuilder.Append($"{this.sourceFileEOL}{label}{this.sourceFileEOL}");
        for (int index = 0; index < keywordCaptures.Count; index++)
        {
            string keyword = keywordCaptures[index].Value.Trim();
            if (string.IsNullOrEmpty(keyword))
            {
                continue;
            }

            string bullet = bulletCaptures[index].Value;
            keyword = this.ProcessSourceFileText(keyword);
            keywordLinesBuilder.Append($"{bullet} {keyword}{this.sourceFileEOL}");
            atLeastOneKeyword = true;
        }

        return atLeastOneKeyword ? keywordLinesBuilder.ToString() : this.sourceFileEOL;
    }

    [GeneratedRegex(@"(?:\r?\n|\r)latestCommit:[^\r\n]*(?:\r?\n|\r)", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex LatestCommitLineRegex();

    [GeneratedRegex(@"(?:\r?\n|\r)glossaryID:[^\r\n]*(?:\r?\n|\r)", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex GlossaryIDRegex();

    private void ApplyHighLevelSubstitutions()
    {
        // Some Regex must be applied before parsing the Markdown
        // Substitutions, if any, will not affect the upcoming parsing
        this.sourceFileContentWithoutHeader = CodeBlockRegex().Replace(this.sourceFileContentWithoutHeader, this.ReplaceCodeBlock);
    }

    [GeneratedRegex(@"(?:^|\r?\n|\r)(`{3,})(?:\r?\n|\r).*?(?:\r?\n|\r)\1(?:\r?\n|\r|$)", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex CodeBlockRegex();

    private string ReplaceCodeBlock(Match match) =>
        this.AddTextSubstitution(this.ProcessSourceFileTextVariablesOnly(match.Value));

    private async Task ParseSourceFile()
    {
        StringWriter writer = new(new StringBuilder(this.sourceFileContentWithoutHeader.Length), CultureInfo.InvariantCulture);
        await using (writer.ConfigureAwait(false))
        {
            TargetFileRenderer renderer = new(writer, this.sourceFileContentWithoutHeader, this.ProcessSourceFileText);
            MarkdownDocument document = Markdown.Parse(this.sourceFileContentWithoutHeader, this.markdownPipeline);
            renderer.Render(document);

            // Flush any remaining markdown content
            await renderer.Writer.WriteAsync(renderer.TakeNext(this.sourceFileContentWithoutHeader.Length - renderer.LastWrittenIndex)).ConfigureAwait(false);

            this.nonTranslatedTargetFileContentWithoutHeader = writer.ToString();
        }
    }

    private string ProcessSourceFileText(string? text)
    {
        if (string.IsNullOrEmpty(text))
        {
            return string.Empty;
        }

        text = InlineCodeRegex().Replace(text, this.ReplaceInlineCode);
        text = LinkRegex().Replace(text, this.ReplaceLink);
        text = EmphasisRegex().Replace(text, this.ReplaceEmphasis);
        text = SnippetRegex().Replace(text, this.ReplaceSnippet);
        text = VariableRegex().Replace(text, this.ReplaceVariable);
        text = this.QueueTranslation(text);
        return text;
    }

    private string ProcessSourceFileTextVariablesOnly(string? text)
    {
        if (string.IsNullOrEmpty(text))
        {
            return string.Empty;
        }

        text = VariableRegex().Replace(text, this.ReplaceVariable);
        return text;
    }

    [GeneratedRegex(@"(?<!`)(`+)(?:[^`\r\n][^\r\n]*?[^`\r\n]|[^`\r\n])\1(?!`)", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex InlineCodeRegex();

    private string ReplaceInlineCode(Match match) =>
        this.AddTextSubstitution(this.ProcessSourceFileTextVariablesOnly(match.Value));

    [GeneratedRegex(@"(!?\[ *)([^\r\n\]]*?)( *\]\([^\r\n\)]*\))", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex LinkRegex();

    private string ReplaceLink(Match match)
    {
        string link = match.Groups[2].Value;
        if (link.StartsWith("!!", StringComparison.Ordinal))
        {
            // A link name starting with !! will not be rendered, do not translate it
            return this.AddTextSubstitution(match.Value);
        }

        string part1 = this.AddTextSubstitution(match.Groups[1].Value);
        string part2 = this.ProcessSourceFileText(link);
        string part3 = this.AddTextSubstitution(match.Groups[3].Value);
        return this.AddTextSubstitution($"{part1}{part2}{part3}");
    }

    [GeneratedRegex(@"(\*\*\* *)([^\r\n\*]*?)( *\*\*\*)", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex EmphasisRegex();

    private string ReplaceEmphasis(Match match)
    {
        string part1 = this.AddTextSubstitution(match.Groups[1].Value);
        string part2 = this.ProcessSourceFileText(match.Groups[2].Value);
        string part3 = this.AddTextSubstitution(match.Groups[3].Value);
        return this.AddTextSubstitution($"{part1}{part2}{part3}");
    }

    [GeneratedRegex(@"\{% *(?i:snippet|endsnippet)[^\r\n%]*%\}", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex SnippetRegex();

    private string ReplaceSnippet(Match match) =>
        this.AddTextSubstitution(match.Value);

    [GeneratedRegex($@"(\{{\{{ *)(?i:{LanguageCode.English}|{LanguageCode.French}|{LanguageCode.German})(\.[^\r\n\}}]*\}}\}})", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex VariableRegex();

    private string ReplaceVariable(Match match)
    {
        string part1 = match.Groups[1].Value;
        string part2 = this.targetFile.Language.Code;
        string part3 = match.Groups[2].Value;
        return this.AddTextSubstitution($"{part1}{part2}{part3}");
    }

    private string QueueTranslation(string text)
    {
        Match trimSubstitutionsMatch = TrimSubstitutionsRegex().Match(text);

        // Ignore tags at the start, along with space characters, do not have to be translated
        string beginPart = string.Empty;
        string trimmedAtStart = trimSubstitutionsMatch.Groups[1].Value;
        if (!string.IsNullOrEmpty(trimmedAtStart))
        {
            beginPart = this.AddTextSubstitution(trimmedAtStart);
        }

        // Ignore tags at the end, along with space characters, do not have to be translated
        string endPart = string.Empty;
        string trimmedAtEnd = trimSubstitutionsMatch.Groups[3].Value;
        if (!string.IsNullOrEmpty(trimmedAtEnd))
        {
            endPart = this.AddTextSubstitution(trimmedAtEnd);
        }

        string middlePart = string.Empty;
        string textToTranslate = trimSubstitutionsMatch.Groups[2].Value;
        if (!string.IsNullOrEmpty(textToTranslate))
        {
            if (!DeeplIgnoreTag.GetSubstitutionRegex().Replace(textToTranslate, string.Empty).Any(char.IsLetter))
            {
                // No letter when the ignore tags are removed, so not something we have to translate
                middlePart = this.AddTextSubstitution(textToTranslate);
            }
            else
            {
                // When multiple substitutions are following each other, we must replace them by a single one,
                // otherwise the translation may add spaces we do not want
                textToTranslate = ConsecutiveSubstitutionsRegex().Replace(textToTranslate, this.CombineConsecutiveSubstitutions);

                // If the text to translate has substitutions, normalizing it (by changing indexes in ignore tags to 0, 1, 2, 3, etc.)
                // which will drastically improves the likelihood of reusing that translation elsewhere
                List<int> substitutionIndexes = new();
                string normalizedTextToTranslate = DeeplIgnoreTag.GetSubstitutionRegex().Replace(textToTranslate, match =>
                {
                    if (int.TryParse(match.Groups[1].Value, NumberStyles.None, CultureInfo.InvariantCulture, out int index))
                    {
                        string replacement = $"{DeeplIgnoreTag.Begin}{substitutionIndexes.Count}{DeeplIgnoreTag.End}";
                        substitutionIndexes.Add(index);
                        return replacement;
                    }

                    return match.Value;
                });

                if (this.completedTranslations.TryGetValue(normalizedTextToTranslate, out string? translatedText))
                {
                    // That translation already has been completed for another file or was in the cache
                    // However, we need to set the right ignore tag indexes in the translated text
                    translatedText = DeeplIgnoreTag.GetSubstitutionRegex().Replace(translatedText, match =>
                        int.TryParse(match.Groups[1].Value, NumberStyles.None, CultureInfo.InvariantCulture, out int index) &&
                        index < substitutionIndexes.Count ? $"{DeeplIgnoreTag.Begin}{substitutionIndexes[index]}{DeeplIgnoreTag.End}" : match.Value);

                    middlePart = this.AddTextSubstitution(translatedText);
                }
                else
                {
                    // If the same translation has to be done more than once, reuse it
                    if (!this.translations.TryGetValue(normalizedTextToTranslate, out DeeplTranslation? translation))
                    {
                        translation = new DeeplTranslation(normalizedTextToTranslate);
                        this.translations.Add(normalizedTextToTranslate, translation);
                    }

                    middlePart = this.AddTranslationSubstitution(translation, substitutionIndexes);
                }
            }
        }

        return $"{beginPart}{middlePart}{endPart}";
    }

    public const string GetSubstitutionPattern = $@"{DeeplIgnoreTag.Begin}\d+{DeeplIgnoreTag.End}";

    [GeneratedRegex($@"^((?:\s+|{GetSubstitutionPattern})*)(.*?)((?:\s+|{GetSubstitutionPattern})*)$", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex TrimSubstitutionsRegex();

    [GeneratedRegex($@"{DeeplIgnoreTag.Begin}\d+{DeeplIgnoreTag.End}(?:\s*{DeeplIgnoreTag.Begin}\d+{DeeplIgnoreTag.End})+", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    private static partial Regex ConsecutiveSubstitutionsRegex();

    private string CombineConsecutiveSubstitutions(Match match) => this.AddTextSubstitution(match.Value);

    private string AddTextSubstitution(string text)
    {
        int substitutionIndex = this.substitutions.Count;
        string substitutionTag = $"{DeeplIgnoreTag.Begin}{substitutionIndex}{DeeplIgnoreTag.End}";
        this.substitutions.Add(substitutionIndex, new TextSubstitution(text, this.substitutions));
        return substitutionTag;
    }

    public string AddTranslationSubstitution(DeeplTranslation translation, IList<int> substitutionIndexes)
    {
        int substitutionIndex = this.substitutions.Count;
        string substitutionTag = $"{DeeplIgnoreTag.Begin}{substitutionIndex}{DeeplIgnoreTag.End}";
        this.substitutions.Add(substitutionIndex, new TranslationSubstitution(translation, substitutionIndexes, this.substitutions));
        return substitutionTag;
    }

    private async Task Translate()
    {
        if (this.translations.Count == 0)
        {
            return;
        }

        // The order of the keys in the Dictionary<TKey,TValue>.KeyCollection is unspecified, but it is the same order as the associated values
        // in the Dictionary<TKey,TValue>.ValueCollection returned by the Values property
        Dictionary<string, DeeplTranslation>.KeyCollection keys = this.translations.Keys;
        Dictionary<string, DeeplTranslation>.ValueCollection values = this.translations.Values;

        TextResult[] results = await this.deeplTranslator.TranslateTextAsync(keys, LanguageCode.English,
            LanguageCode.French, this.deeplTextTranslateOptions).ConfigureAwait(false);

        if (results.Length != this.translations.Count)
        {
            throw new InvalidOperationException(
                $"Expected to receive {this.translations.Count} results, but received {results.Length} results instead");
        }

        int index = 0;
        foreach (DeeplTranslation translation in values)
        {
            this.completedTranslations.Add(translation.Text, translation.Result = results[index].Text);
            index++;
        }
    }

    private void AssembleTargetFile()
    {
        string nonTranslatedTargetFileContent = $"{this.targetFileHeader}{this.nonTranslatedTargetFileContentWithoutHeader}";
        TextSubstitution substitution = new(nonTranslatedTargetFileContent, this.substitutions);
        this.targetFileContent = substitution.GetReplacement();
    }

    private async Task WriteTargetFile()
    {
        Directory.CreateDirectory(Path.GetDirectoryName(this.targetFile.FilePath)!);
        await File.WriteAllTextAsync(this.targetFile.FilePath, this.targetFileContent, this.targetEncoding).ConfigureAwait(false);
    }
}