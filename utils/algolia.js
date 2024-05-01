const algoliaSearch = require('algoliasearch');
const locales = ['en', 'fr', 'de'];
const defaultLocale = 'en';

const headingContentRe = /<(h[123])(|\s.*?)>([\s\S]*?)<\/h[123]>|<(p)(?:|\s.*?)>([\s\S]*?)<\/p>/gm;
const idRe = /\bid="(.+?)"/;
const localeRe = new RegExp(`(?:${locales.join('|')})`);

module.exports = function (results) {
  if (process.env.ALGOLIA_ADMIN_KEY && process.env.ALGOLIA_APP_ID) {
    let algoliaDoc = {};

    results.map(result => {
      if (result.inputPath.endsWith('.md')) {
        let objects = [];
        let title;
        let url = result.url;
        let icon = "https://cdnweb.devolutions.net/images/projects/devolutions/logos/devolutions-icon-shadow.svg";

        let locale = result.url.split('/')[1];
        let doc = result.url.split('/')[2];
        let os = result.url.split('/')[3];

        let docLabel = doc;

        if (!localeRe.test(locale)) {
          locale = defaultLocale;
          doc = result.url.split('/')[1];
          os = result.url.split('/')[2];
        }

        switch (doc) {
          case 'cloud':
            icon = "https://cdnweb.devolutions.net/images/projects/cloud/logos/cloud-icon-shadow.svg";
            docLabel = "Cloud Services";
            os = "";
            break;
          case 'hub':
            icon = "https://cdnweb.devolutions.net/images/projects/password-hub/logos/password-hub-icon-shadow.svg";
            docLabel = "Devolutions Hub";
            os = "";
            break;
          case 'kb':
            icon = "https://cdnweb.devolutions.net/images/projects/knowledge-base/logos/knowledge-base-icon-shadow.svg";
            docLabel = "Knowledge Base";
            os = "";
            break;
          case 'rdm':
            icon = "https://cdnweb.devolutions.net/images/projects/remote-desktop-manager/logos/remote-desktop-manager-icon-shadow.svg";
            if (os == 'windows') {
              docLabel = "Remote Desktop Manager (Windows)";
            } else if (os == 'mac') {
              docLabel = "Remote Desktop Manager (macOS)";
            }
            break;
          case 'server':
            icon = "https://cdnweb.devolutions.net/images/projects/server/logos/server-icon-shadow.svg";
            docLabel = "Devolutions Server";
            os = "";
            break;
        }
        if (!result.content.includes("<main class=\"markdown\"></main>")) {

          for (;;) {
            const headingContentMatch = headingContentRe.exec(result.content.replace(/\r?\n|\r/g, ""));
            let content;

            if (!headingContentMatch) {
              break;
            }

            if (headingContentMatch[1]) {
              const idMatch = idRe.exec(headingContentMatch[2]);
              const id = idMatch ? idMatch[1] : undefined;

              title = title = headingContentMatch[3].replace(/<[^>]*>?/gm, '').trim();

              if (id) {
                url = `${result.url}#${id}`;
              }
            }

            if (headingContentMatch[4]) {
              content = headingContentMatch[5].replace(/<[^>]*>?/gm, '').trim();

              if (content.length > 512) {
                content = `${content.substring(0, 509)}...`
              }
            }

            const found = objects.find(o => o.title === title && o.url === url && !o.content);

            if (found) {
              found.content = content;
            } else {
              objects.push({ doc: docLabel, icon, title, url, content });
            }
          }

          algoliaDoc[locale] = algoliaDoc[locale] || [];
          algoliaDoc[locale] = algoliaDoc[locale].concat(objects);
        }
      }
    })


    const client = algoliaSearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);

    for (const [key, value] of Object.entries(algoliaDoc)) {
      const index = client.initIndex(`docs-${key}`);

      index.setSettings({
        searchableAttributes: ['title', 'content'],
        attributesForFaceting: ['searchable(doc)'],
        distinct: 1,
        attributeForDistinct: 'url'
      }).then();

      index.replaceAllObjects(value, {
        autoGenerateObjectIDIfNotExist: true
      });
    }
  }
}
