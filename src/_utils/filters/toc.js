const headingRe = /<(h[23])(|\s.*?)>([\s\S]*?)<\/h[23]>/gm;
const idRe = /\bid="(.+?)"/;

const renderEl = el => {
  const title = `<a class="dwd-toc__item ${el.hType === 'h3' ? 'dwd-toc__item--level-2' : 'dwd-toc__item--level-1'} aria-hidden:hidden" href="#${el.id}">${el.title}</a>`;

  const children = el?.children?.length ? renderListEl(el.children) : '';

  return `<li>${title}${children}</li>`;
}

const renderListEl = tableOfContents => {
  return `<ul>${tableOfContents.map(renderEl).join('')}</ul>`;
}

const toc = (raw, tocName) => {
  let tableOfContents = [];
  let current = null;

  for(;;) {
    const headingMatch = headingRe.exec(raw.replace(/\r?\n|\r/g, ""));

    if (!headingMatch) {
      break;
    }

    const hType = headingMatch[1];
    if (hType === 'h3' && current === null) {
      continue;
    }

    const attr = headingMatch[2];
    const contents = headingMatch[3].replace(/<[^>]*>?/gm, '').trim();

    const idMatch = idRe.exec(attr);
    const id = idMatch ? idMatch[1] : undefined;

    if (hType === 'h2') {
      current = { title: contents, id, hType, children: [] };
      tableOfContents.push(current);
    } else if (hType === 'h3') {
      current?.children?.push({ title: contents, id, hType });
    }
  }

  if (tableOfContents.length === 0) {
    return '';
  }

  return `<span class="dwd-toc__title">${tocName}</span>${renderListEl(tableOfContents)}`;
};

module.exports = {toc};