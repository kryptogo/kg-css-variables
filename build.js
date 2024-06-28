import StyleDictionary from "style-dictionary";

/* Register custom format for KG Primitives Variables
    (prop.name -> formatted name)
    --primitives-color-brand-brand-100 -> --brand-100
    --primitives-size-size-2xs-4 -> --size-2xs-4
*/
StyleDictionary.registerFormat({
  name: "css/variables",
  formatter: ({ dictionary }) => {
    return `:root {\n${dictionary.allProperties
      .map(
        (prop) =>
          `  --${prop.name.replace(/primitives-(?:size|color-[^-]+)-/g, "")}: ${
            prop.value
          };`
      )
      .join("\n")}\n}`;
  },
});

/*
Register custom format for Light/Dark Mode design tokens
  --color-tokens-dark-mode-text-text-primary -> --text-primary
  --color-tokens-dark-mode-brand-primary -> --brand-primary
*/
StyleDictionary.registerFormat({
  name: "css/variables-dark",
  formatter: ({ dictionary }) => {
    return `.dark {\n${dictionary.allProperties
      .map(
        (prop) =>
          `  --${prop.name
            .replace("color-tokens-dark-mode-", "")
            .replace(/(\b\w+\b)-\1-/g, "$1-")}: ${prop.value};`
      )
      .join("\n")}\n}`;
  },
});
StyleDictionary.registerFormat({
  name: "css/variables-light",
  formatter: ({ dictionary }) => {
    return `:root {\n${dictionary.allProperties
      .map(
        (prop) =>
          `  --${prop.name
            .replace("color-tokens-light-mode-", "")
            .replace(/(\b\w+\b)-\1-/g, "$1-")}: ${prop.value};`
      )
      .join("\n")}\n}`;
  },
});

/*
Register custom format for Responsive(Desktop/Tablet/Mobile) design tokens
  --responsive-desktop-modal-modal-min-height -> --modal-min-height
  --responsive-desktop-ui-screen-width -> --ui-screen-width
*/
StyleDictionary.registerFormat({
  name: "css/responsive-desktop",
  formatter: ({ dictionary }) => {
    return `@media (min-width: 1280px) {\n${dictionary.allProperties
      .map(
        (prop) =>
          `  --${prop.name
            .replace("responsive-desktop-", "")
            .replace(/(\b\w+\b)-\1-/g, "$1-")}: ${prop.value};`
      )
      .join("\n")}\n}`;
  },
});
StyleDictionary.registerFormat({
  name: "css/responsive-tablet",
  formatter: ({ dictionary }) => {
    return `@media (min-width: 768px) {\n${dictionary.allProperties
      .map(
        (prop) =>
          `  --${prop.name
            .replace("responsive-tablet-", "")
            .replace(/(\b\w+\b)-\1-/g, "$1-")}: ${prop.value};`
      )
      .join("\n")}\n}`;
  },
});
StyleDictionary.registerFormat({
  name: "css/responsive-mobile",
  formatter: ({ dictionary }) => {
    return `:root {\n${dictionary.allProperties
      .map(
        (prop) =>
          `  --${prop.name
            .replace("responsive-mobile-", "")
            .replace(/(\b\w+\b)-\1-/g, "$1-")}: ${prop.value};`
      )
      .join("\n")}\n}`;
  },
});

const KGStyleDictionary = StyleDictionary.extend({
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/",
      files: [
        {
          destination: "kg-primitives-variables.css",
          format: "css/variables",
          filter: {
            attributes: {
              category: "primitives",
            },
          },
        },
        {
          destination: "color-tokens/dark-mode.css",
          format: "css/variables-dark",
          filter: {
            attributes: {
              category: "color-tokens",
              type: "dark-mode",
            },
          },
        },
        {
          destination: "color-tokens/light-mode.css",
          format: "css/variables-light",
          filter: {
            attributes: {
              category: "color-tokens",
              type: "light-mode",
            },
          },
          // options: {
          //   // Look here 👇
          //   outputReferences: true,
          // },
        },
        {
          destination: "responsive/desktop.css",
          format: "css/responsive-desktop",
          filter: {
            attributes: {
              category: "responsive",
              type: "desktop",
            },
          },
        },
        {
          destination: "responsive/tablet.css",
          format: "css/responsive-tablet",
          filter: {
            attributes: {
              category: "responsive",
              type: "tablet",
            },
          },
        },
        {
          destination: "responsive/mobile.css",
          format: "css/responsive-mobile",
          filter: {
            attributes: {
              category: "responsive",
              type: "mobile",
            },
          },
        },
      ],
    },
  },
});

KGStyleDictionary.buildAllPlatforms();
