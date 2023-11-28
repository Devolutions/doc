const inspect = require('util').inspect;
const sidebarShortcode = require('../src/_utils/shortcodes/sidebar');
const md = require('markdown-it')({
  html: true
});

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
}