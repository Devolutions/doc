const inspect = require('util').inspect;
const sidebarShortcode = require('../src/_utils/shortcodes/sidebar');
const slugify = require('slugify');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const md = require('markdown-it')({
  html: true
});

md.use(markdownItAnchor, {
  slugify: s => slugify(s, {
    lower: true,
    strict: true
  }),
  permalink:markdownItAnchor.permalink.ariaHidden({
    symbol: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M9.933,12.072c0.17,-0.481 0.435,-0.936 0.819,-1.32c1.376,-1.376 3.615,-1.376 4.991,0l3.209,3.209c1.376,1.376 1.376,3.615 0,4.991c-1.376,1.376 -3.615,1.376 -4.991,0l-0.979,-0.979c-0.82,0.252 -1.673,0.361 -2.523,0.329l2.076,2.076c2.162,2.162 5.681,2.162 7.843,0c2.162,-2.162 2.162,-5.681 0,-7.843l-3.208,-3.209c-2.162,-2.162 -5.681,-2.162 -7.843,0c-0.371,0.371 -0.674,0.784 -0.917,1.222l1.523,1.524Zm4.134,-0.144c-0.17,0.481 -0.435,0.936 -0.819,1.32c-1.376,1.376 -3.615,1.376 -4.991,0l-3.209,-3.209c-1.376,-1.376 -1.376,-3.615 0,-4.991c1.376,-1.376 3.615,-1.376 4.991,0l0.979,0.979c0.82,-0.252 1.673,-0.361 2.523,-0.329l-2.076,-2.076c-2.162,-2.162 -5.681,-2.162 -7.843,0c-2.162,2.162 -2.162,5.681 0,7.843l3.209,3.209c2.162,2.162 5.681,2.162 7.843,0c0.371,-0.371 0.674,-0.784 0.917,-1.222l-1.524,-1.524Z"/>
    </svg>
    `,
    placement: 'before'
  })
})
.use(markdownItAttrs);

md.renderer.rules.table_open = function() {
  return `<div class="table"><table>`
}

md.renderer.rules.table_close = function() {
  return `</table></div>`
}

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

module.exports = (config) => {
  config.addLiquidShortcode('sidebar', sidebarShortcode);
  config.addShortcode('debug', (content, depth = 0) => `<pre>${inspect(content, { depth })}</pre>`);

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
        htmlIcon = `<img alt="${dataLabel}" src="https://cdnweb.devolutions.net/web/common/images/icons/sys-${dataLabelSlugify}.png" />`;
      }

      if (!isFirst) {
        const addHidden = match.replace(/>$/, ' hidden>');
        content = content.replace(match, addHidden);
      }

      isFirst = false;

      return `<a href="#${dataLabelSlugify}" role="tab"${ariaSelected}>${htmlIcon}${dataLabel}</a>`;
    }).join('');

    return `<div class="tabs"><nav role="tablist">${htmlTabs}</nav><div>${content}</div></div>`;
  });

  config.addPairedShortcode('tabItem', (content, label) => {
    if (!label) {
      throw new Error('Missing label prop on {% tabItem "My label is missing" %} component');
    }

    return `<section role="tabpanel" data-label="${label}">${md.render(content).replace(/\n/g, '')}</section>`;
  });

  config.addFilter('gTab', function (content) {
    const dataLabelGlobalRegex = /data-label="gTab-(.+?)"/g;
    const dataLabelRegex = /data-label="gTab-(.+?)"/;
    const icons = ['windows', 'macos', 'linux', 'rdm', 'dvls', 'hub', 'workspace', 'gateway', 'pam'];
    let tabs = new Set();
    let htmlTabs = "";

    content.match(dataLabelGlobalRegex)?.map((match) => {
      const dataLabel = match.match(dataLabelRegex)[1];
      tabs.add(dataLabel);

      if (dataLabel !== tabs.values().next().value) {
        const addHidden = `${match} hidden>`;

        content = content.replace(`${match}>`, addHidden);
      }
    });

    if (tabs.size !== 0) {
      htmlTabs += '<nav id="global-tab" class="flex mb-6 shadow-[inset_0_-2px_0_rgba(0,0,0,0.18)]" role="tablist">';

      let isFirst = true;
      tabs.forEach(tab => {
        const tabSlugify = slugify(tab, { lower: true });
        let htmlIcon = '';

        if (icons.includes(tabSlugify)) {
          htmlIcon = `<img alt="${tab} icon" class="size-6 mr-1.5" src="https://cdnweb.devolutions.net/sysadminotaur/icons/48x48/logo-${tabSlugify}.png" />`;
        }

        htmlTabs += `<a class="flex items-center px-3 py-2 mt-0 font-semibold border-b-2 border-transparent text-sm/none hover:text-primary aria-selected:text-primary aria-selected:border-primary" href="?tab=${tabSlugify}" role="tab" aria-selected="${isFirst}">
          ${htmlIcon}${tab}
        </a>`;

        isFirst = false;
      });

      htmlTabs += '</nav>';
    }

    return `${htmlTabs}<div class="prose markdown">${content}</div>`;
  });

  const gTabs = [
    { label: "Windows" },
    { label: "macOS" },
    { label: "Linux" },
    { label: "RDM" },
    { label: "DVLS" },
    { label: "Hub" },
    { label: "Workspace" },
    { label: "Gateway" },
    { label: "PAM" },
  ];

  gTabs.forEach(tab => {
    const labelSlugify = slugify(tab.label, { lower: true });

    config.addPairedShortcode(labelSlugify, (content) => {
      return `<section role="tabpanel" data-label="gTab-${tab.label}" data-panel="gTab-${labelSlugify}">${md.render(content).replace(/\n/g, '')}</section>`;
    });
  });
}