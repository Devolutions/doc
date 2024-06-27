module.exports = {
  eleventy_test: {
    snippet: "{{ labels.[[name]].[[lang]] }}",
    inline: true,
    preview: {
      text: "Label",
      subtext: [
        { template: "{{ labels.{name}.{lang} }}" }
      ]
    },
    params: {
      name: {
        parser: "argument",
        options: {
          model: {
            editor_key: "name"
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
              "}"
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
              "}"
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
      name: {
        type: "select",
        options: {
          values: "data.labels",
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