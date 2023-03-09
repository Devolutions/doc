module.exports = () => ({
  layout: 'layouts/markdown.njk',
  pagination: {
    data: 'trees',
    size: 1,
    alias: 'tree'
  },
  permalink: '{{ (page.filePathStem.replace("dwl/", tree + "/dwl/") if tree !== "dwl" else page.filePathStem) | localized }}/',
  trees: [
    'hub',
    'server',
    'rdm/windows',
    'rdm/mac'
  ]
});