module.exports = {
  ...require("./snippet"),
  ...require("./youtube"),
  unknown_sing: {
    snippet: "{{[[name]]}}",
    preview: {
      text: "Unknown single",
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
              ">"
            ]
          }
        }
      }
    }
  }
}