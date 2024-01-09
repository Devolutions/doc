const inspect = require('util').inspect;
const sidebarShortcode = require('../src/_utils/shortcodes/sidebar');
const slugify = require('slugify');
const md = require('markdown-it')({
  html: true
});

md.renderer.rules.image = function (tokens, idx, options, env, slf) {
  const token = tokens[idx];
  token.attrs[token.attrIndex('alt')][1] = slf.renderInlineAsText(
    token.children,
    options,
    env
  );
  let figCaption = '';

  if (token.attrs[token.attrIndex('alt')][1]) {
    if (token.attrs[token.attrIndex('alt')][1].startsWith('!!')) {
      token.attrs[token.attrIndex('alt')][1] = token.attrs[
        token.attrIndex('alt')
      ][1].replace('!!', '');
    } else {
      figCaption = `<figcaption>${
        token.attrs[token.attrIndex('alt')][1]
      }</figcaption>`;
    }
  }

  tokens[idx] = token;

  return `<figure>${slf.renderToken(tokens, idx, options)}${figCaption}</figure>`;
};

function findChild(arr, target) {
  for (const obj of arr) {
    if (obj.url === target) {
      return true
    }

    if (obj.items) {
      if (obj.items.some(item => item.url === target)) {
        return true;
      } else {
        const result = findChild(obj.items, target);

        if (result) {
          return true
        }
      }
    }
  }

  return false;
};

module.exports = (config) => {
  config.addLiquidShortcode('sidebar', sidebarShortcode);
  config.addShortcode('debug', (content, depth = 0) => `<pre>${inspect(content, { depth })}</pre>`);

  config.addShortcode('youtube', (id) => `<div class="video"><div class="video-container"><iframe width="640" height="360" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe></div></div>`);

  config.addPairedShortcode('snippet', (content, icon) => {
    let className = '';

    if (icon && /(?<=\bfill=')[^']*/.test(icon)) {
      switch (/(?<=\bfill=')[^']*/.exec(icon)[0]) {
        case '#f5af23':
            className = 'caution';
          break;
        case '#f20000':
          className = 'warning';
          break;
        case '#0068c3':
          className = 'info';
          break;
        case '#6ab934':
          className = 'notice';
          break;
      }
    }

    return `<div class="snippet ${className}">${icon ?? ''}<div>${md.render(content).replace(/\n/g, '')}</div></div>`;
  });

  config.addPairedShortcode('tabs', (content) => {
    const sectionRegex = /^<section (.+?)>/gm;
    const dataLabelRegex = /data-label="(.+?)"/;
    const icons = ['windows', 'macos', 'linux'];
    let isFirst = true;

    const htmlTabs = content.match(sectionRegex).map((match) => {
      const dataLabel = match.match(dataLabelRegex)[1];
      const dataLabelSlugify = slugify(dataLabel, { lower: true });
      const ariaSelected = isFirst ? ' aria-selected' : '';
      let htmlIcon = '';

      if (icons.includes(dataLabelSlugify)) {
        htmlIcon = `<img alt="${dataLabel}" src="https://webdevolutions.blob.core.windows.net/web/common/images/icons/sys-${dataLabelSlugify}.png" />`;
      }

      if (!isFirst) {
        const addHidden = match.replace(/>$/, ' hidden>');
        content = content.replace(match, addHidden);
      }

      isFirst = false;

      return `<a href="#${dataLabelSlugify}" role="tab"${ariaSelected}>${htmlIcon}${dataLabel}</a>`;
    }).join('');

    return `<div class="tabs"><nav role="tablist">${htmlTabs}</nav><div>${content}</div></div>`;
  })

  config.addPairedShortcode('tabItem', (content, label) => {
    if (!label) {
      throw new Error('Missing label prop on {% tabItem "My Label" %} component');
    }

    return `<section role="tabpanel" data-label="${label}">${md.render(content).replace(/\n/g, '')}</section>`;
  })
}