namespace Devolutions.TranslationTool;

using System.Text.RegularExpressions;

internal static partial class DeeplIgnoreTag
{
    public const string Name = "x";
    public const string Begin = $"<{Name}>";
    public const string End = $"</{Name}>";

    public const string CapturingSubstitutionPattern = $@"{Begin}({RegexPatterns.Digit}+){End}";
    public const string NonCapturingSubstitutionPattern = $@"{Begin}{RegexPatterns.Digit}+{End}";

    [GeneratedRegex(CapturingSubstitutionPattern, RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    public static partial Regex CapturingSubstitutionRegex();

    [GeneratedRegex(NonCapturingSubstitutionPattern, RegexOptions.CultureInvariant | RegexOptions.Singleline)]
    public static partial Regex NonCapturingSubstitutionRegex();
}