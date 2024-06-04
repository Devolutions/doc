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
      icon: "smart_display"
    //   image: [
    //     {
    //       template: "/../.cloudcannon/previews/snippet/{snippet_type|slugify}.svg"
    //     }
    //   ]
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