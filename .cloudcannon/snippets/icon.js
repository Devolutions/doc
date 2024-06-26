module.exports = {
  eleventy_test: {
    snippet: "{{ icons.[[name]] }}",
    inline: true,
    preview: {
      text: "Icon",
      subtext: "Icon text"
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
      }
    },
    _inputs: {
      name: {
        type: "select",
        options: {
          values: [
            "absent",
            "expandMore",
            "check"
          ]
        }
      }
    }
  }
}