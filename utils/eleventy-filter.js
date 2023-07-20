const { toc } = require('../docs/_filters/toc');

module.exports = (config) => {
  config.addFilter('localized', function (value) {
    if (value.startsWith('/')) {
      value = value.startsWith('/en/') ? value.replace('/en/', '/') : value;
      value = value.endsWith('/index') ? value.replace('/index', '/') : value;
    } else {
      value = value === 'en' ? '' : `/${value}`;
    }

    return value;
  });

  config.addFilter('localizedUrl', function (url, lang, currentLang) {
    url = url.startsWith(`/${currentLang}/`) ? url.replace(`/${currentLang}/`, `/${lang}/`) : `/${lang}${url}`;
    url = url.startsWith(`/en/`) ? url.replace(`/en/`, `/`) : url;
    return url;
  });

  config.addFilter('toc', toc);

  config.addFilter('findFirstChildrenUrlTree', function (array) {
    function findUrl(a) {
      if (a[0].hasData) {
        return a[0].url;
      } else {
        if (a[0].children.length > 0) {
          return findUrl(a[0].children);
        }

        return array.url;
      }
    };

    return findUrl(array.children);
  });

  config.addFilter('filterTree', function (array, lang, tree) {
    const trees = tree.split('/');

    array = array.find(e => e.name == lang).children;
    trees.map(t => array = array.find(e => e.name == t)?.children);

    return array;
  });

  config.addFilter('sortTree', function (array) {
    return array?.sort((a, b) => {
      const aHas = typeof a.order !== 'undefined';
      const bHas = typeof b.order !== 'undefined';
      const aTitleHas = typeof a.title !== 'undefined'
      return bHas - aHas || (aHas === true && a.order - b.order) || (aTitleHas === true && a.title.localeCompare(b.title)) || a.name.localeCompare(b.name)
    })
  });
}