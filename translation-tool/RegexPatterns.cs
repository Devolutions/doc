namespace Devolutions.TranslationTool;

internal static class RegexPatterns
{
    public const string Digit = "[0-9]";

    public const string Whitespace = "[\t\n\r \u00A0]";

    public const string NonWhitespace = "[^\t\n\r \u00A0]";

    public const string NonGroupedEOL = "\r?\n|\r";

    public const string EOL = $"(?:{NonGroupedEOL})";

    public const string NotEOL = "[^\r\n]";

    public const string BeginOrEOL = $"(?:\\A|{NonGroupedEOL})";

    public const string EOLOrEnd = $"(?:{NonGroupedEOL}|\\z)";
}