let cache = {};

function sidebarItem(item, index, ctx, contents, page, icons) {
  if (item.autogenerate) {
    item.items = rebuildTree(item.autogenerate, ctx, contents);
  }

  const url = item.url ? ctx.lang !== 'en' ? `/${ctx.lang}${item.url}` : item.url : null;

  if (!url && (!item.items || item.items?.length === 0)) {
    return;
  }

  const label = ctx.locale[ctx.lang].label[item.label] ? ctx.locale[ctx.lang].label[item.label] : item.label;
  const itemData = url ? contents.find((content) => content.url === url) : null;

  return `<div class="nav-item-container">
    <div class="nav-item-sub-container" data-dwd-tab data-dwd-tab-group="${url ?? label}" data-dwd-tab-target="${url ?? label}">
      ${url ?
        `<a class="nav-item level-${index}" href="${url}">
          ${label ?? itemData?.data.title}
        </a>` :
        `<span class="nav-item level-${index}">
          ${label ?? itemData?.data.title}
        </span>`
      }
      ${item.items?.length > 0 ? (
        `<div class="expand-more">
          ${icons.arrowRight}
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

function rebuildTree({ directory }, { lang }, contents) {
  const filePathStem = directory ? `/content/${lang}/${directory}/` : null;
  contents = contents.filter((content) => content.filePathStem.startsWith(filePathStem))

  const rootNode = { items: [] };
  const nodeMap = { '': rootNode };

  contents.forEach(obj => {
    let parts = obj.filePathStem.replace(filePathStem, '').split('/').filter(part => part && part !== 'index');

    if (parts.length === 0) {
      return;
    }

    let currentPath = '';

    parts.forEach((part, index) => {
      let newPath = currentPath + (currentPath ? '/' : '') + part;

      if (!nodeMap[newPath]) {
        const newNode = { url: obj.url, order: obj.data.order };

        if (index < parts.length - 1) {
          newNode.items = [];
        }

        nodeMap[currentPath].items = nodeMap[currentPath].items || [];
        nodeMap[currentPath].items.push(newNode);
        nodeMap[newPath] = newNode;
      }

      currentPath = newPath;
    });
  });

  sortTree(rootNode);

  return rootNode.items;
}

function sortTree(node) {
  if (node.items) {
    node.items.sort((a, b) => {
      if (a.order != null && b.order != null) {
        return a.order - b.order;
      } else if (a.order != null) {
        return -1;
      } else if (b.order != null) {
        return 1;
      } else if (a.url) {
        return a.url.localeCompare(b.url);
      } else {
        return 0;
      }
    });

    node.items.forEach(sortTree);
  }
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
    if (group.autogenerate) {
      group.items = rebuildTree(group.autogenerate, ctx, contents);
    }

    return `<div class="nav-group">
      ${group.label ? `<span>${ctx.locale[ctx.lang].label[group.label] ? ctx.locale[ctx.lang].label[group.label] : group.label}</span>` : ''}
      ${group.items?.length > 0 ? group.items.map((item) => sidebarItem(item, 1, ctx, contents, page, icons)).join('') : ''}
    </div>`;
  }).join('');

  cache[cacheKey] = html;

  return html;
}