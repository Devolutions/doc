const eleventyFilter = require('./utils/eleventy-filter');
const eleventyNavigationTree = require('./utils/eleventy-navigation-tree');
const eleventySass = require('./utils/eleventy-sass');
const eleventyShortcodes = require('./utils/eleventy-shortcodes');
const eleventyColections = require('./utils/eleventy-collections');
const markdown = require('./utils/markdown');
const algolia = require('./utils/algolia');

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

  config.amendLibrary('md', markdown);

  config.on('eleventy.after', async ({ results }) => {
    algolia(results);
  });

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      output: 'dist'
    }
  }
}
