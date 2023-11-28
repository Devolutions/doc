module.exports = () => ({
  layout: 'layouts/markdown.njk',
  pagination: {
    data: 'trees',
    size: 1,
    alias: 'tree'
  },
  templateEngineOverride: "njk,md",
  permalink: '{{ (page.filePathStem.replace("workspace-browser-extension/", tree + "/workspace-browser-extension/") if tree !== "workspace-browser-extension" else page.filePathStem) | localized }}/',
  trees: [
    'hub',
    'server',
    'rdm/windows',
    'rdm/mac',
  ]
});