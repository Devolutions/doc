module.exports = function() {
  return {
    layout: 'layouts/markdown.njk',
    trees: ['server'],
    tree: 'server',
    searchTags: [
      { 'label': 'Devolutions Server', 'facet': 'doc' }
    ]
  }
}