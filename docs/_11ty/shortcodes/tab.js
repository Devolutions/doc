const slugify = require('slugify');
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt({ html: true });

module.exports = (content, label) => {
  const labelSlugify = slugify(label, { lower: true });
  const renderedContent = md.render(content).replace(/\n/g, '');

  return `<section role="tabpanel" data-label="gTab-${label}" data-panel="gTab-${labelSlugify}">
    ${renderedContent}
  </section>`;
}