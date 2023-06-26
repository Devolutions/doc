module.exports = function() {
  return {
    layout: 'layouts/markdown.njk',
    trees: ['kb'],
    tree: 'kb',
    searchTags: [
      { 'label': 'Knowledge Base', 'facet': 'doc' }
    ]
  }
}