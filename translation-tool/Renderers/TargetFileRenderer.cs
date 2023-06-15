namespace Devolutions.TranslationTool.Renderers;

using Markdig.Renderers;

internal sealed class TargetFileRenderer : TextRendererBase<TargetFileRenderer>
{
    public TargetFileRenderer(TextWriter writer, string sourceFileContent, Func<string, string> processSourceFileTextFunc) : base(writer)
    {
        this.SourceFileContent = sourceFileContent;
        this.ObjectRenderers.Add(new ContainerBlockRenderer());
        this.ObjectRenderers.Add(new LeafBlockRenderer());
        this.ObjectRenderers.Add(new ContainerInlineRenderer(processSourceFileTextFunc));
    }

    public string SourceFileContent { get; }

    public int LastWrittenIndex { get; private set; }

    public string TakeNext(int length)
    {
        if (length == 0)
        {
            return string.Empty;
        }

        string result = this.SourceFileContent.Substring(this.LastWrittenIndex, length);
        this.LastWrittenIndex += length;
        return result;
    }
}