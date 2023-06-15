namespace Devolutions.TranslationTool;

internal sealed class SourceFile
{
    public SourceFile(SourceLanguage language, string filePath, string latestCommit)
    {
        this.Language = language ?? throw new ArgumentNullException(nameof(language));
        this.FilePath = filePath ?? throw new ArgumentNullException(nameof(filePath));
        this.LatestCommit = latestCommit ?? throw new ArgumentNullException(nameof(latestCommit));
    }

    public SourceLanguage Language { get; }

    public string FilePath { get; }

    public string LatestCommit { get; }

    public string? EOL { get; set; }

    public override string ToString() => this.FilePath;
}