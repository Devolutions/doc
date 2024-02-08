let cache = {};

function sidebarItem(item, index, ctx, contents, page, icons) {
  if (item.autogenerate) {
    item.items = rebuildTree(item.autogenerate, ctx, contents);
  }

  let url = item.url ?? null;

  if (!item.filePathStem && url && ctx.lang !== 'en') {
    url = `/${ctx.lang}${item.url}`;
  }

  if (!url && (!item.items || item.items?.length === 0)) {
    return;
  }

  const label = ctx.locale[ctx.lang].label[item.label] ? ctx.locale[ctx.lang].label[item.label] : item.label;
  const itemData = item.filePathStem || url ? contents.find((content) => content.filePathStem === item.filePathStem || content.url === url) : null;

  return `<div class="nav-item-container">
    <div class="nav-item-sub-container" data-dwd-tab data-dwd-tab-group="sidebar" data-dwd-tab-target="${itemData?.url ?? label}">
      ${itemData?.url ?
        `<a class="nav-item level-${index}" href="${itemData.url}">
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
      `<div class="nav-item-items" data-dwd-tab-group="sidebar" data-dwd-tab-target="${itemData?.url ?? label}">
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
    let parts = obj.filePathStem.replace(filePathStem, '').split('/').filter(part => part);

    let currentPath = '';
    let currentNode = rootNode;

    for (let i = 0; i < parts.length; i++) {
      const isIndex = parts[i] === 'index';
      const part = isIndex ? '' : parts[i];
      let newPath = currentPath + (currentPath && part ? '/' : '') + part;

      if (!nodeMap[newPath]) {
        if (isIndex) {
          Object.assign(currentNode, { url: obj.url, filePathStem: obj.filePathStem, order: obj.data.order });
        } else {
          const newNode = { url: obj.url, filePathStem: obj.filePathStem, items: [], order: obj.data.order };
          currentNode.items = currentNode.items || [];
          currentNode.items.push(newNode);
          nodeMap[newPath] = newNode;
          currentNode = newNode;
        }
      } else {
        if (isIndex) {
          Object.assign(nodeMap[newPath], { url: obj.url, filePathStem: obj.filePathStem, order: obj.data.order });
        } else {
          currentNode = nodeMap[newPath];
        }
      }

      if (!isIndex) {
        currentPath = newPath;
      }
    }
  });

  sortTree(rootNode);

  return rootNode.items;
}

function sortTree(node) {
  if (node.items && node.items.length > 0) {
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