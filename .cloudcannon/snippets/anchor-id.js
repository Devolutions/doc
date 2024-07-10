module.exports = {
  anchor_id: {
    snippet: "{#[[id]]}",
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