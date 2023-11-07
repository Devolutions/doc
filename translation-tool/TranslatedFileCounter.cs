namespace Devolutions.TranslationTool;

internal sealed class TranslatedFileCounter
{
    public TranslatedFileCounter(int maximum)
    {
        this.Maximum = maximum;
        this.MaximumReached = this.Current >= this.Maximum;
        this.Remaining = maximum;
    }

    public int Maximum { get; }

    public int Current { get; private set; }

    public bool MaximumReached { get; private set; }

    public int Remaining { get; private set; }

    public void Increment()
    {
        this.Current++;
        this.Remaining--;
        this.MaximumReached = this.Remaining <= 0;
    }
}