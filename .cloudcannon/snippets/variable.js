module.exports = {
  eleventy_variable: {
    template: "eleventy_liquid_shortcode_positional_args",
    inline: true,
    preview: {},
    definitions: {
      shortcode_name: "var",
      positional_args: [
        {
          editor_key: "lang",
          type: "string"
        },
        {
          editor_key: "label",
          type: "string"
        }
      ]
    },
    _inputs: {
      lang: {
        type: "select",
        options: {
          values: [
            "en",
            "fr",
            "de"
          ]
        }
      },
      label: {
        type: "select",
        options: {
          values: "data.var",
          value_key: "key",
          preview: {
            text: [
              {
                template: "{lang}"
              },
              {
                key: "en"
              }
            ]
          }
        }
      }
    }
  }
}