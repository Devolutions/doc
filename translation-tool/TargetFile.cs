namespace Devolutions.TranslationTool;

internal sealed class TargetFile
{
    public TargetFile(SourceFile sourceFile, TargetLanguage language, string filePath)
    {
        this.SourceFile = sourceFile ?? throw new ArgumentNullException(nameof(sourceFile));
        this.Language = language ?? throw new ArgumentNullException(nameof(language));
        this.FilePath = filePath ?? throw new ArgumentNullException(nameof(filePath));
    }

    public SourceFile SourceFile { get; }

    public TargetLanguage Language { get; }

    public string FilePath { get; }

    public override string ToString() => this.FilePath;
}