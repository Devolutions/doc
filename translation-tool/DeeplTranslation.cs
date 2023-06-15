namespace Devolutions.TranslationTool;

internal sealed class DeeplTranslation
{
    public DeeplTranslation(string text) =>
        this.Text = text ?? throw new ArgumentNullException(nameof(text));

    public string Text { get; }

    public string? Result { get; set; }
}