let cache = {};

function sidebarItem(item, index, ctx, contents, page, icons) {
  const url = item.url ? ctx.lang !== 'en' ? `/${ctx.lang}${item.url}` : item.url : null;
  const label = ctx.locale[ctx.lang].label[item.label] ? ctx.locale[ctx.lang].label[item.label] : item.label;
  const itemData = url ? contents.find((content) => content.url === url) : null;

  return `<div class="nav-item-container">
    <div class="nav-item-sub-container" data-dwd-tab data-dwd-tab-group="${url ?? label}" data-dwd-tab-target="${url ?? label}">
      ${url ?
        `<a class="nav-item level-${index}" href="${url}">
          ${itemData?.data.title ?? label}
        </a>` :
        `<span class="nav-item level-${index}">
          ${itemData?.data.title ?? label}
        </span>`
      }
      ${item.items?.length > 0 ? (
        `<div class="expand-more">
          ${icons.expandMore}
        </div>`) :
        ''
      }
    </div>
    ${item.items?.length > 0 ? (
      `<div class="nav-item-items" data-dwd-tab-group="${url ?? label}" data-dwd-tab-target="${url ?? label}">
        ${item.items.map(subItem => sidebarItem(subItem, index + 1, ctx, contents, page, icons)).join('')}
      </div>`) :
      ''
    }
  </div>`;
}

module.exports = async function(sidebar) {
  const ctx = this.ctx.environments ?? this.ctx;
  const cacheKey = `sidebar_${ctx.project}_${ctx.lang}`

  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  const contents = ctx.collections.all.filter(content => content.data.lang === ctx.lang);
  const page = ctx.page;
  const icons = ctx.icons;

  const html = sidebar.map((group) => {
    return `<div class="nav-group">
      ${group.items?.length > 0 && group.items.map((item) => sidebarItem(item, 1, ctx, contents, page, icons)).join('')}
    </div>`;
  }).join('');

  cache[cacheKey] = html;

  return html;
}