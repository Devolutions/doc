namespace Devolutions.TranslationTool;

internal sealed class TranslatedFileCounter
{
    private readonly int maximum;
    private int current;

    public TranslatedFileCounter(int maximum)
    {
        this.maximum = maximum;
        this.MaximumReached = this.current >= this.maximum;
    }

    public bool MaximumReached { get; private set; }

    public void Increment()
    {
        this.current++;
        this.MaximumReached = this.current >= this.maximum;
    }
}