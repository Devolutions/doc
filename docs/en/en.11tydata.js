module.exports = function() {
  return {
    layout: 'layouts/base.njk',
    permalink: '{{ page.filePathStem | localized }}/',
    lang: 'en'
  }
}