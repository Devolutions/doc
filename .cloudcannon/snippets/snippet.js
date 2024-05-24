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
      ],
      icon: "error",
      icon_color: "#f5af23",
      image: "/.cloudcannon/previews/badge-caution.svg"
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
            icon: [
              {
                key: "preview.icon"
              }
            ],
            icon_color: [
              {
                key: "preview.icon_color"
              }
            ]
          }
        }
      }
    }
  }
}