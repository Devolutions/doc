module.exports = {
  eleventy_tab: {
    template: "eleventy_liquid_paired_shortcode_positional_args",
    inline: true,
    preview: {
      text: [
        { template: "Tab - {label}" },
        "Tab"
      ],
      subtext: [
        { key: "content" }
      ]
    },
    definitions: {
      shortcode_name: "gTab",
      content_key: "content",
      positional_args: [
        {
          editor_key: "label",
          type: "string"
        }
      ]
    },
    _inputs: {
      content: {
        type: "markdown"
      },
      label: {
        type: "select",
        options: {
          values: [
            "Windows",
            "macOS",
            "Linux",
            "RDM",
            "DVLS",
            "Hub",
            "Workspace",
            "Gateway",
            "PAM"
          ]
        }
      }
    }
  }
}