module.exports = {
  eleventy_youtube: {
    template: "eleventy_liquid_shortcode_positional_args",
    inline: false,
    preview: {
      text: "Youtube",
      subtext: [
        {
          template: "https://www.youtube.com/embed/{id}"
        }
      ],
      icon: "smart_display",
      icon_color: "#ff0000"
    },
    definitions: {
      shortcode_name: "youtube",
      positional_args: [
        {
          editor_key: "id",
          type: "string"
        }
      ]
    },
    _inputs: {
      id: {
        type: "text",
        comment: "ex: `-uz8dvo9tpE?start=75`"
      }
    }
  }
}