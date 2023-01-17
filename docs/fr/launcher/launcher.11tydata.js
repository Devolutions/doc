module.exports = () => ({
  layout: 'layouts/markdown.njk',
  pagination: {
    data: 'trees',
    size: 1,
    alias: 'tree'
  },
  permalink: '{{ (page.filePathStem.replace("launcher/", tree + "/launcher/") if tree !== "launcher" else page.filePathStem) | localized }}',
  trees: [
    'server'
  ]
});