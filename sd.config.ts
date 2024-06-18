module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/",
      files: [
        {
          destination: "kg-variables.css",
          format: "css/variables",
          // https://amzn.github.io/style-dictionary/#/version_3?id=output-references
          // Without outputReferences: true Style Dictionary would resolve all references
          // options: {
          //   outputReferences: true,
          // },
        },
      ],
    },
  },
};
