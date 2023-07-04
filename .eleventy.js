const eleventyFilter = require('./utils/eleventy-filter');
const eleventyNavigationTree = require('./utils/eleventy-navigation-tree');
const eleventySass = require('./utils/eleventy-sass');
const eleventyShortcodes = require('./utils/eleventy-shortcodes');
const markdown = require('./utils/markdown');
const algolia = require('./utils/algolia');

require('dotenv').config();

module.exports = function (config) {
  config.addPlugin(eleventySass);
  config.addPlugin(eleventyFilter);
  config.addPlugin(eleventyShortcodes);
  config.addPlugin(eleventyNavigationTree);
  config.setQuietMode(true);

  config.addPassthroughCopy({
    'img': 'img',
    'fonts': 'fonts'
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