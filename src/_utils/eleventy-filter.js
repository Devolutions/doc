const inspect = require('util').inspect;
const Terser = require('terser');
const { toc } = require('./filters/toc');

module.exports = (config) => {
  config.addLiquidFilter('if', (condition, trueOutput, falseOutput = '') => condition ? trueOutput : falseOutput);
  config.addLiquidFilter('startsWith', (str, searchString) => str ? str.startsWith(searchString) : false);
  config.addLiquidFilter('debug', (obj, depth = 0) => `<pre>${inspect(obj, { depth })}</pre>`);
  config.addLiquidFilter('removeLangFromUrl', (url) => url ? url.replace(/^\/[a-zA-Z]{2}\//, '/') : '');

  config.addLiquidFilter('isSidebarItemActive', (arr, target) => {
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

    return findChild(arr, target);
  });

  config.addFilter('docLink', (filePathStem, slug = '') => {
    filePathStem = filePathStem.replace('/content/', '');
    const lang = filePathStem.substring(0, 2);
    filePathStem = filePathStem.replace(`${lang}.generated/`, '').replace(`${lang}/`, '').replace('/index', '');

    slug = slug.startsWith('/') ? slug.substring(1) : slug;
    slug = slug.endsWith('/') ? slug.slice(0, -1) : slug;

    if (filePathStem === 'index') {
      return `/${lang === 'en' ? '' : `${lang}/`}`;
    }

    return `/${lang === 'en' ? '' : `${lang}/`}${slug ? slug : filePathStem }/`;
  });

  config.addFilter('getProjectFromFilePathStem', (filePathStem) => {
    const getProjectRe = /\/content\/[a-zA-Z]{2}\/(.*?)\//;
    const getProjectMatch = getProjectRe.exec(filePathStem);

    return getProjectMatch ? getProjectMatch[1] : '';
  });

  config.addFilter('getLangFromFilePathStem', (filePathStem) => {
    const getProjectRe = /\/content\/([a-zA-Z]{2})\//;
    const getProjectMatch = getProjectRe.exec(filePathStem);

    return getProjectMatch ? getProjectMatch[1] : '';
  });

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

  config.addFilter('encodeURIComponent', (str) => encodeURIComponent(str));

  config.addFilter('encodeURIFilter', function (string, params) {
      let urlParams = "";
      let i = 0;

      for (key in params) {
        i++;

        urlParams += `${ key }=${ encodeURIComponent(params[key]) }`

        if (Object.keys(params).length > i) {
          urlParams += "&";
        }
      }
      return `${encodeURI(string)}${urlParams}`;
  });

  config.addNunjucksAsyncFilter('jsmin', async function(code, callback) {
    try {
      let result = await Terser.minify(code, { sourceMap: true });
      callback(null, result.code);
    } catch(e) {
      console.error('Terser error: ', e);
    }

    callback(null, code);
  });
}