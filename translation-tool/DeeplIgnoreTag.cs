namespace Devolutions.TranslationTool;

using System.Text.RegularExpressions;

internal static partial class DeeplIgnoreTag
{
    public const string Name = "x";
    public const string Begin = $"<{Name}>";
    public const string End = $"</{Name}>";

    [GeneratedRegex($@"{Begin}(\d+){End}", RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    public static partial Regex GetSubstitutionRegex();
}