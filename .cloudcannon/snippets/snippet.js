module.exports = {
  eleventy_snippet: {
    template: "eleventy_liquid_paired_shortcode_positional_args",
    inline: true,
    preview: {
      text: "Snippet",
      subtext: [
        {
          key: "content"
        }
      ]
    },
    definitions: {
      shortcode_name: "snippet2",
      content_key: "content",
      positional_args: [
        {
          editor_key: "snippet_type",
          type: "string",
          optional: true
        }
      ]
    },
    _inputs: {
      content: {
        type: "markdown",
        options: {
          bold: true,
          italic: true,
          link: true,
          bulletedlist: true,
          numberedlist: true,
          code: true
        }
      },
      snippet_type: {
        type: "choice",
        options: {
          values: "data.snippets",
          value_key: "key",
          preview: {
            text: [
              {
                key: "label"
              }
            ],
            image: [
              {
                key: "preview"
              }
            ]
          }
        }
      }
    }
  }
}