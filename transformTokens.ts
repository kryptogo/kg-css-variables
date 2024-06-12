const StyleDictionary = require("style-dictionary");

const StyleDictionaryExtended = StyleDictionary.extend({
  source: ["tokens/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
});

StyleDictionaryExtended.buildAllPlatforms();
