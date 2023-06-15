namespace Devolutions.TranslationTool.Renderers;

using Markdig.Renderers;
using Markdig.Syntax.Inlines;

internal sealed class ContainerInlineRenderer : MarkdownObjectRenderer<TargetFileRenderer, ContainerInline>
{
    private readonly Func<string, string> processSourceFileTextFunc;

    public ContainerInlineRenderer(Func<string, string> processSourceFileTextFunc) =>
        this.processSourceFileTextFunc = processSourceFileTextFunc ?? throw new ArgumentNullException(nameof(processSourceFileTextFunc));

    protected override void Write(TargetFileRenderer renderer, ContainerInline containerInline)
    {
        int startIndex = containerInline.Span.Start;

        int difference1 = startIndex - renderer.LastWrittenIndex;
        if (difference1 > 0)
        {
            // Make sure we flush all previous markdown before rendering this inline entry
            renderer.Write(renderer.TakeNext(difference1));
        }

        if (containerInline.LastChild == null)
        {
            return;
        }

        int difference2 = containerInline.LastChild.Span.End + 1 - startIndex;
        if (difference2 <= 0)
        {
            return;
        }

        string sourceFileText = renderer.TakeNext(difference2);
        string targetFileText = this.processSourceFileTextFunc(sourceFileText);
        renderer.Write(targetFileText);
    }
}