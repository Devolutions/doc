namespace Devolutions.TranslationTool.Renderers;

using Markdig.Renderers;
using Markdig.Syntax;

internal sealed class LeafBlockRenderer : MarkdownObjectRenderer<TargetFileRenderer, LeafBlock>
{
    protected override void Write(TargetFileRenderer renderer, LeafBlock leafBlock) => renderer.WriteLeafInline(leafBlock);
}