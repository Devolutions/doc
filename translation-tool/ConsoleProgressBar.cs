namespace Devolutions.TranslationTool;

using System.Globalization;

internal sealed class ConsoleProgressBar
{
    public int TotalCount { get; init; }

    public int CurrentCount { get; private set; }

    public double CurrentPercent { get; private set; }

    public int RoundedCurrentPercent { get; private set; }

    public async Task IncrementAsync(int count = 1)
    {
        if (count == 0)
        {
            return;
        }

        int newCurrentCount = this.CurrentCount + count;
        if (count < 0 || newCurrentCount > this.TotalCount)
        {
            throw new ArgumentOutOfRangeException(nameof(count));
        }

        double newCurrentPercent = (double)newCurrentCount / this.TotalCount * 100d;
        int newRoundedCurrentPercent = (int)Math.Round(newCurrentPercent, 0, MidpointRounding.AwayFromZero);
        if (newRoundedCurrentPercent == 100 && newCurrentCount < this.TotalCount)
        {
            newRoundedCurrentPercent = 99;
        }

        while (this.RoundedCurrentPercent < newRoundedCurrentPercent)
        {
            this.RoundedCurrentPercent++;
            if (this.RoundedCurrentPercent % 10 == 0)
            {
                await Console.Out.WriteAsync(this.RoundedCurrentPercent.ToString(CultureInfo.InvariantCulture)).ConfigureAwait(false);
            }
            else
            {
                await Console.Out.WriteAsync('.').ConfigureAwait(false);
            }
        }

        if (this.RoundedCurrentPercent == 100)
        {
            await Console.Out.WriteLineAsync('%').ConfigureAwait(false);
        }

        await Console.Out.FlushAsync().ConfigureAwait(false);

        this.CurrentCount = newCurrentCount;
        this.CurrentPercent = newCurrentPercent;
    }

    public async ValueTask AbortIfNotCompletedAsync()
    {
        if (this.RoundedCurrentPercent < 100)
        {
            await Console.Out.WriteLineAsync().ConfigureAwait(false);
            await Console.Out.FlushAsync().ConfigureAwait(false);
        }
    }
}