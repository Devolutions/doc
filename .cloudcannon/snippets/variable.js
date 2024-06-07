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
        }
      ]
    },
    _inputs: {
      lang: {
        type: "select",
        options: {
          values: "data.locale"
        }
      }
    }
  }
}