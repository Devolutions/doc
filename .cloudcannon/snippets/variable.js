module.exports = {
  eleventy_variable: {
    snippet: "{{ variables.[[variable]].[[lang]] }}",
    inline: true,
    preview: {
      text: "Variable",
      subtext: [
        { template: "variables.{variable}.{lang}" },
        { template: "variables.null.{lang}" },
        { template: "variables.{variable}.null" },
        { template: "variables.null.null" }
      ],
      icon: "data_object"
    },
    params: {
      variable: {
        parser: "argument",
        options: {
          model: {
            editor_key: "variable"
          },
          format: {
            string_boundary: [
              ""
            ],
            forbidden_tokens: [
              "/",
              "/>",
              ">",
              "}}",
              "}",
              "."
            ]
          }
        }
      },
      lang: {
        parser: "argument",
        options: {
          model: {
            editor_key: "lang"
          },
          format: {
            string_boundary: [
              ""
            ],
            forbidden_tokens: [
              "/",
              "/>",
              ">",
              "}}",
              "}",
              "."
            ]
          }
        }
      }
    },
    _inputs: {
      lang: {
        type: "select",
        options: {
          values: [
            "en", "fr", "de"
          ]
        }
      },
      variable: {
        type: "select",
        options: {
          values: "data.variables",
          preview: {
            text: [
              { key: "en" }
            ]
          }
        }
      }
    }
  }
}