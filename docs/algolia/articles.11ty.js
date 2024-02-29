const locales = ['en', 'fr', 'de']

const headingContentRe = /<(h[123])(|\s.*?)>([\s\S]*?)<\/h[123]>|<(p)(?:|\s.*?)>([\s\S]*?)<\/p>/gm;
const idRe = /\bid="(.+?)"/;

const algoliaSettings = {
  searchableAttributes: ['title', 'content'],
  attributesForFaceting: ['searchable(doc)'],
  distinct: 1,
  attributeForDistinct: 'url'
}

module.exports = {
  data() {
    return {
      permalink: false
    }
  },
  async render(data) {
    for (l in locales) {
      let articles = []

      data.collections.all
        .filter(f =>
          f.data.lang === locales[l] &&
          f.inputPath.endsWith('.md') &&
          (!!f.template.frontMatter.content && f.template.frontMatter.content.replace(/(?:\\[rn]|[\r\n]+)+/g, '') !== '') &&
          f.url
        )
        .map(article => {
          let objects = [];
          let title = article.data.title;
          let url = `https://docs.devolutions.net${article.url}`;
          let icon = "https://cdnweb.devolutions.net/images/projects/devolutions/logos/devolutions-icon-shadow.svg";

          let locale = article.data.lang;
          let doc = article.url.split('/')[2];
          let os = article.url.split('/')[3];

          let docLabel = doc;

          if (locale === 'en') {
            doc = article.url.split('/')[1];
            os = article.url.split('/')[2];
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
              docLabel = "Remote Desktop Manager";

              if (os == 'mac') {
                docLabel = "Remote Desktop Manager (macOS)";
              }
              break;
            case 'server':
              icon = "https://cdnweb.devolutions.net/images/projects/server/logos/server-icon-shadow.svg";
              docLabel = "Devolutions Server";
              os = "";
              break;
          }

          for (;;) {
            const headingContentMatch = headingContentRe.exec(article.content.replace(/\r?\n|\r/g, ""));
            let content;

            if (!headingContentMatch) {
              break;
            }

            if (headingContentMatch[1]) {
              const idMatch = idRe.exec(headingContentMatch[2]);
              const id = idMatch ? idMatch[1] : undefined;

              title = headingContentMatch[3].replace(/<[^>]*>?/gm, '').trim();

              if (id) {
                url = `https://docs.devolutions.net${article.url}#${id}`;
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

          articles = articles.concat(objects);
        });

      await this.algoliaInitIndex(`docs-${locales[l]}`, articles, algoliaSettings);
    }
  }
}
