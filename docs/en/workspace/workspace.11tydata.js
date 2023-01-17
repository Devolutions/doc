module.exports = () => ({
  layout: 'layouts/markdown.njk',
  pagination: {
    data: 'trees',
    size: 1,
    alias: 'tree'
  },
  permalink: '{{ (page.filePathStem.replace("workspace/", tree + "/workspace/") if tree !== "workspace" else page.filePathStem) | localized }}',
  trees: [
    'server'
  ]
});