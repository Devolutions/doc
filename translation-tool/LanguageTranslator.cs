namespace Devolutions.TranslationTool;

using System.Text;
using System.Text.Json;

using DeepL;

using Markdig;

internal sealed class LanguageTranslator
{
    private const int CompletedTranslationsInitialCapacity = 65536;

    private readonly Encoding targetEncoding;
    private readonly TargetLanguage targetLanguage;
    private readonly MarkdownPipeline markdownPipeline;
    private readonly Translator deeplTranslator;
    private readonly TranslatedFileCounter translatedFileCounter;

    // TODO Set GlossaryId here
    private readonly TextTranslateOptions deeplTextTranslateOptions = new()
    {
        Formality = Formality.PreferMore,
        IgnoreTags = { DeeplIgnoreTag.Name },
        PreserveFormatting = true,
        TagHandling = "xml"
    };

    public LanguageTranslator(Encoding targetEncoding, TargetLanguage targetLanguage, MarkdownPipeline markdownPipeline,
        Translator deeplTranslator, TranslatedFileCounter translatedFileCounter)
    {
        this.targetEncoding = targetEncoding ?? throw new ArgumentNullException(nameof(targetEncoding));
        this.targetLanguage = targetLanguage ?? throw new ArgumentNullException(nameof(targetLanguage));
        this.markdownPipeline = markdownPipeline ?? throw new ArgumentNullException(nameof(markdownPipeline));
        this.deeplTranslator = deeplTranslator ?? throw new ArgumentNullException(nameof(deeplTranslator));
        this.translatedFileCounter = translatedFileCounter ?? throw new ArgumentNullException(nameof(translatedFileCounter));
    }

    public async Task Execute()
    {
        Dictionary<string, string> completedTranslations = await this.LoadCache().ConfigureAwait(false);
        try
        {
            foreach (TargetFile targetFile in this.targetLanguage.Files)
            {
                FileTranslator fileTranslator = new(this.targetEncoding, targetFile, this.markdownPipeline,
                    this.deeplTranslator, this.deeplTextTranslateOptions, completedTranslations);
                await fileTranslator.Execute().ConfigureAwait(false);
                this.translatedFileCounter.Increment();
                if (this.translatedFileCounter.MaximumReached)
                {
                    break;
                }
            }
        }
        finally
        {
            await this.SaveCache(completedTranslations).ConfigureAwait(false);
        }
    }

    private async Task<Dictionary<string, string>> LoadCache()
    {
        try
        {
            FileStream fileStream = new(this.targetLanguage.CacheFilePath, FileMode.Open, FileAccess.Read, FileShare.Read);
            await using (fileStream.ConfigureAwait(false))
            {
                return await JsonSerializer.DeserializeAsync<Dictionary<string, string>>(fileStream).ConfigureAwait(false) ??
                       new Dictionary<string, string>(CompletedTranslationsInitialCapacity, StringComparer.Ordinal);
            }
        }
        catch
        {
            return new Dictionary<string, string>(CompletedTranslationsInitialCapacity, StringComparer.Ordinal);
        }
    }

    private async Task SaveCache(Dictionary<string, string> completedTranslations)
    {
        try
        {
            Directory.CreateDirectory(Path.GetDirectoryName(this.targetLanguage.CacheFilePath)!);
            FileStream fileStream = new(this.targetLanguage.CacheFilePath, FileMode.Create, FileAccess.Write, FileShare.None);
            await using (fileStream.ConfigureAwait(false))
            {
                await JsonSerializer.SerializeAsync(fileStream, completedTranslations, new JsonSerializerOptions { WriteIndented = true }).ConfigureAwait(false);
            }
        }
        catch
        {
            // Ignored
        }
    }
}