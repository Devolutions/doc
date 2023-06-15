namespace Devolutions.TranslationTool;

internal sealed class SourceLanguage
{
    public SourceLanguage(string code, string directoryPath)
    {
        this.Code = code ?? throw new ArgumentNullException(nameof(code));
        this.DirectoryPath = directoryPath ?? throw new ArgumentNullException(nameof(directoryPath));
    }

    public string Code { get; }

    public string DirectoryPath { get; }

    public SourceFile[] Files { get; set; } = Array.Empty<SourceFile>();

    public override string ToString() => this.Code;
}