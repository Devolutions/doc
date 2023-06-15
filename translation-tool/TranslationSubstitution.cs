namespace Devolutions.TranslationTool;

using System.Globalization;
using System.Text.RegularExpressions;

internal sealed class TranslationSubstitution : ISubstitution
{
    private readonly DeeplTranslation translation;
    private readonly IList<int> substitutionIndexes;
    private readonly IDictionary<int, ISubstitution> substitutions;

    public TranslationSubstitution(DeeplTranslation translation, IList<int> substitutionIndexes, IDictionary<int, ISubstitution> substitutions)
    {
        this.translation = translation ?? throw new ArgumentNullException(nameof(translation));
        this.substitutionIndexes = substitutionIndexes ?? throw new ArgumentNullException(nameof(substitutionIndexes));
        this.substitutions = substitutions ?? throw new ArgumentNullException(nameof(substitutions));
    }

    public string GetReplacement()
    {
        string? result = this.translation.Result;
        if (result == null)
        {
            throw new InvalidOperationException("Translations must be done before calling for replacements");
        }

        return DeeplIgnoreTag.GetSubstitutionRegex().Replace(result, this.ApplySubstitutions);
    }

    private string ApplySubstitutions(Match match) =>
        int.TryParse(match.Groups[1].Value, NumberStyles.None, CultureInfo.InvariantCulture, out int index) &&
        index < this.substitutionIndexes.Count &&
        this.substitutions.TryGetValue(this.substitutionIndexes[index], out ISubstitution? substitution) ?
            substitution.GetReplacement() : match.Value;
}