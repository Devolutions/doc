module.exports = {
  anchor_id: {
    snippet: "{#[[id]]}",
    inline: true,
    preview: {
      text: "Anchor/ID",
      subtext: [
        { template: "{id}" },
        { template: "Add an anchor/ID to a title" }
      ],
      icon: "anchor"
    },
    params: {
      id: {
        parser: "content",
        options: {
          editor_key: "id",
          forbidden_tokens: [
            '}'
          ]
        }
      }
    }
  }
}