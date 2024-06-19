module.exports = {
  eleventy_tab: {
    template: "eleventy_liquid_paired_shortcode_positional_args",
    inline: false,
    preview: {
      text: [
        { template: "Tab - {label}" },
        "Tab"
      ],
      subtext: [
        { key: "content" }
      ],
      icon: "tab",
      image: [
        { template: "https://cdnweb.devolutions.net/sysadminotaur/icons/48x48/logo-{label|slugify}.png" }
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
        type: "markdown",
        options: {
          bold: true,
          format: "p h2 h3 h4 h5 h6",
          italic: true,
          link: true,
          bulletedlist: true,
          indent: true,
          numberedlist: true,
          outdent: true,
          code: true,
          horizontalrule: true,
          image: true,
          table: true,
          undo: true,
          redo: true,
          snippet: true
        }
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