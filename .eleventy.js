const eleventyFilter = require('./src/_utils/eleventy-filter');
const eleventyNavigationTree = require('./utils/eleventy-navigation-tree');
const eleventySass = require('./utils/eleventy-sass');
const eleventyShortcodes = require('./utils/eleventy-shortcodes');
const eleventyColections = require('./utils/eleventy-collections');
const markdown = require('./utils/markdown');
const algoliaSearch = require('algoliasearch');
const tailwind = require('tailwindcss');
const postCss = require('postcss');
const autoprefixer = require('autoprefixer');

require('dotenv').config();

module.exports = function (config) {
  config.addPlugin(eleventySass);
  config.addPlugin(eleventyFilter);
  config.addPlugin(eleventyShortcodes);
  config.addPlugin(eleventyNavigationTree);
  config.addPlugin(eleventyColections);
  config.setQuietMode(true);

  config.addPassthroughCopy({
    'src/_static': '.'
  });

  config.addLiquidFilter("postcss", async function(code) {
    try {
      const result = await postCss([
        tailwind(require('./tailwind.config')),
        autoprefixer()
      ])
      .process(code, { from: './src/_includes/styles/tailwind.css' });

      return result.css;
    } catch (error) {
      console.error('PostCSS filter error:', error);
      throw new Error(error);
    }
  });

  config.amendLibrary('md', markdown);

  config.addJavaScriptFunction('algoliaInitIndex', async function(name, data, settings) {
    if (process.env.ALGOLIA_ADMIN_KEY && process.env.ALGOLIA_APP_ID) {
      const client = algoliaSearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);

      const index = client.initIndex(name);

      if (settings) {
        index.setSettings(settings).then();
      }

      await index.clearObjects().then();

      const batchSize = 1000;
      for (let i = 0; i < data.length; i += batchSize) {
        const batch = data.slice(i, i + batchSize);
        await index.saveObjects(batch, {
          autoGenerateObjectIDIfNotExist: true
        });
      }
    }
  });

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      output: 'dist'
    }
  }
}
