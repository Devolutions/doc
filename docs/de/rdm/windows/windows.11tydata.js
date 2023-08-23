module.exports = function() {
  return {
    layout: 'layouts/markdown.njk',
    trees: ['rdm/windows'],
    tree: 'rdm/windows',
    searchTags: [
      { 'label': 'Remote Desktop Manager (Windows)', 'facet': 'doc' }
    ]
  }
}