const snippet = require('./snippet');
const tab = require('./tab');
const youtube = require('./youtube');

module.exports = (config) => {
  // Shortcodes
  config.addShortcode('youtube', youtube);

  // Paired Shortcodes
  config.addPairedShortcode('snippet', snippet);
  config.addPairedShortcode('gTab', tab);
}