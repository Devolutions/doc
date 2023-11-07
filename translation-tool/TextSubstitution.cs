namespace Devolutions.TranslationTool;

using System.Globalization;
using System.Text.RegularExpressions;

internal sealed class TextSubstitution : ISubstitution
{
    private readonly string text;
    private readonly IDictionary<int, ISubstitution> substitutions;

    public TextSubstitution(string text, IDictionary<int, ISubstitution> substitutions)
    {
        this.text = text ?? throw new ArgumentNullException(nameof(text));
        this.substitutions = substitutions ?? throw new ArgumentNullException(nameof(substitutions));
    }

    public string GetReplacement() => DeeplIgnoreTag.CapturingSubstitutionRegex().Replace(this.text, this.ApplySubstitutions);

    private string ApplySubstitutions(Match match) =>
        int.TryParse(match.Groups[1].Value, NumberStyles.None, CultureInfo.InvariantCulture, out int index) &&
        this.substitutions.TryGetValue(index, out ISubstitution? substitution) ?
            substitution.GetReplacement() : match.Value;
}