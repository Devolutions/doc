const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url = "https://cdn.devolutions.net/devolutions-icons/3.4.1/inline-svg/devolutions-icons.json";

  return EleventyFetch(url, {
    duration: "*",
    type: "json"
  });
};