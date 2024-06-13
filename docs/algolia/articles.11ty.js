const cheerio = require('cheerio');

const locales = ['en', 'fr', 'de']
const iconMap = {
  cloud: {
    icon: "https://cdnweb.devolutions.net/images/projects/cloud/logos/cloud-icon-shadow.svg",
    label: "Cloud Services"
  },
  hub: {
    icon: "https://cdnweb.devolutions.net/images/projects/password-hub/logos/password-hub-icon-shadow.svg",
    label: "Devolutions Hub"
  },
  kb: {
    icon: "https://cdnweb.devolutions.net/images/projects/knowledge-base/logos/knowledge-base-icon-shadow.svg",
    label: "Knowledge Base"
  },
  rdm: {
    icon: "https://cdnweb.devolutions.net/images/projects/remote-desktop-manager/logos/remote-desktop-manager-icon-shadow.svg",
    label: "Remote Desktop Manager"
  },
  server: {
    icon: "https://cdnweb.devolutions.net/images/projects/server/logos/server-icon-shadow.svg",
    label: "Devolutions Server"
  },
  dgw: {
    icon: "https://cdnweb.devolutions.net/images/projects/gateway/logos/gateway-icon-shadow.svg",
    label: "Gateway"
  },
  workspace: {
    icon: "https://webdevolutions.blob.core.windows.net/images/projects/workspace/logos/workspace-icon-shadow.svg",
    label: "Workspace"
  },
  powershell: {
    icon: "https://cdnweb.devolutions.net/images/projects/devolutions-powershell/devolutions-powershell-icon-shadow.svg",
    label: "PowerShell"
  },
  pam: {
    icon: "https://cdnweb.devolutions.net/images/projects/devolutions-pam/devolutions-pam-icon-shadow.svg",
    label: "PAM"
  }
}

const algoliaSettings = {
  searchableAttributes: ['title', 'content', 'url'],
  attributesForFaceting: ['searchable(doc)'],
  distinct: 1,
  attributeForDistinct: 'path'
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
        .forEach(article => {
          const doc = article.url.split('/')[article.data.lang === 'en' ? 1 : 2];
          const os = article.url.split('/')[article.data.lang === 'en' ? 2 : 3];

          let title = article.data.title;
          let url = `https://docs.devolutions.net${article.url}`;
          let docLabel = iconMap[doc]?.label || doc;

          if (os === 'mac') {
            docLabel = `${docLabel} (macOS)`;
          }

          const $ = cheerio.load(article.content);
          const tags = ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li'];

          $(tags.join(',')).each(function() {
            $(this).find('table, figure, p, ul, ol, pre').remove();

            if (this.name.startsWith('h')) {
              title = $(this).text().trim();

              if ($(this).attr('id')) {
                url = `https://docs.devolutions.net${article.url}#${$(this).attr('id')}`;
              }

              return;
            }

            let content = $(this).text().trim();

            if (content === '') {
              return;
            }

            articles.push({
              tag: this.name,
              doc: docLabel,
              icon: iconMap[doc]?.icon || "https://cdnweb.devolutions.net/images/projects/devolutions/logos/devolutions-icon-shadow.svg",
              title,
              url,
              content: content,
              path: article.url
            });
          });
        });

      await this.algoliaInitIndex(`docs-${locales[l]}`, articles, algoliaSettings);
    }
  }
}