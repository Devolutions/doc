function topicConfig(name, code) {
  if (!name || !code) {
    throw new Error("Both name and code are required to generate a topic configuration.");
  }

  return {
    name: name,
    path: `docs/content/${code}`,
    schemas: {
      default: {
        path: ".cloudcannon/schemas/topic.md"
      }
    },
    _enabled_editors: [
      "content",
      "visual"
    ],
    output: true
  }
}

module.exports = {
  topicEn: topicConfig("English", "en"),
  topicFr: topicConfig("French", "fr"),
  topicDe: topicConfig("Deutsch", "de")
}