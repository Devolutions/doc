module.exports = {
  eleventy_youtube: {
    template: "eleventy_liquid_shortcode_positional_args",
    inline: false,
    preview: {
      text: "Youtube",
      subtext: [
        {
          key: "id"
        }
      ],
      icon: "smart_display",
      icon_color: "#ff0000",
      image: [
        {
          template: "https://i.ytimg.com/vi_webp/{id}/maxresdefault.webp"
        }
      ]
    },
    definitions: {
      shortcode_name: "youtube",
      positional_args: [
        {
          editor_key: "id",
          type: "string"
        }
      ]
    }
  }
}