module.exports = {
  eleventy_variable: {
    snippet: "{{ variables.[[variable]].[[lang]] [[optional_capitalize]] }}",
    inline: true,
    preview: {
      text: "Variable",
      subtext: [
        { template: "variables.{variable}.{lang}" },
        { template: "variables.null.{lang}" },
        { template: "variables.{variable}.null" },
        "Use a variable"
      ],
      icon: "data_object"
    },
    params: {
      optional_capitalize: {
        parser: "optional",
        options: {
          snippet: "| [[capitalize]]",
          remove_empty: true,
        }
      },
      capitalize: {
        parser: "argument",
        options: {
          model: {
            editor_key: "capitalize",
            implied_boolean: true,
            allowed_values: ["capitalize"],
            remove_empty: true,
            optional: true,
            default: "capitalize"
          },
          format: {
            string_boundary: [""],
            forbidden_tokens: ["/", "/>", ">", "}}", "}", "."]
          }
        }
      },
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