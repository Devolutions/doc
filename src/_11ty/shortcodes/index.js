const snippet = require('./snippet');

module.exports = (config) => {
  config.addPairedShortcode('snippet2', snippet);
}