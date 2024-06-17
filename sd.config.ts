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
        },
      ],
    },
  },
};
