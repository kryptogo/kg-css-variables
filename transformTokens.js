const StyleDictionary = require("style-dictionary");
// .extend("config.json");
// StyleDictionary.buildAllPlatforms();

StyleDictionary.registerFilter({
  name: "isPrimitive",
  matcher: function (token) {
    console.log("token~~~~~~~~~~~", token);
    return token.attributes.category === "primitives";
  },
});

const StyleDictionaryExtended = StyleDictionary.extend({
  //   ...deepMerge.all([androidConfig, webConfig]),
  source: ["tokens/raw.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "grace-test/build/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          filter: "isPrimitive",
          //   options: {
          //     outputReferences: true,
          //   },
        },
      ],
    },
  },
});

// console.log("StyleDictionaryExtended:", StyleDictionaryExtended);

StyleDictionaryExtended.buildAllPlatforms();
