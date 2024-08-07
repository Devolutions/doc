const snippet = require('./snippet');
const tab = require('./tab');
const variable = require('./variable');
const youtube = require('./youtube');

module.exports = (config) => {
  // Shortcodes
  config.addShortcode('var', variable);
  config.addShortcode('youtube', youtube);

  // Paired Shortcodes
  config.addPairedShortcode('snippet', snippet);
  config.addPairedShortcode('gTab', tab);
}