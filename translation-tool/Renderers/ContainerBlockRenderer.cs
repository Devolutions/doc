namespace Devolutions.TranslationTool.Renderers;

using Markdig.Renderers;
using Markdig.Syntax;

internal sealed class ContainerBlockRenderer : MarkdownObjectRenderer<TargetFileRenderer, ContainerBlock>
{
    protected override void Write(TargetFileRenderer renderer, ContainerBlock containerBlock) => renderer.WriteChildren(containerBlock);
}