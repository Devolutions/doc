const varData = require('../../docs/_data/var.json');

module.exports = {
  eleventy_variable: {
    template: "eleventy_liquid_shortcode_positional_args",
    inline: true,
    preview: {
      text: "Var",
      subtext: [
        { template: "{varData[label][lang]}" },
        { template: "{varData}.{label}.{lang}}" },
        { template: "{data.var[label][lang]}" },
        { template: "{data}.{var}.{label}.{lang}" },
        varData.CI.fr,
        { template: "{label}.{lang}" },
      ]
    },
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
                key: "en"
              }
            ]
          }
        }
      }
    }
  }
}