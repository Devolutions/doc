const MarkdownIt = require('markdown-it');
const snippets = require('./../../_data/snippets.json');

const md = new MarkdownIt({ html: true });

module.exports = (content, snippetKey) => {
  const snippet = snippets[snippetKey];
  const theme = snippet?.theme || '';
  const svg = snippet?.svg || '';
  const renderedContent = md.render(content).replace(/\n/g, '');

  return `<div class="snippet ${theme}">${svg}<div>${renderedContent}</div></div>`;
}