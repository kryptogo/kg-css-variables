# 🎨 kg-css-variables

> Automatically transform Figma design tokens into css variables and create PR for frontend usage

This repo is supposed to be used together with the [Design Tokens plugin for Figma](https://github.com/lukasoppermann/design-tokens).
It transforms the exported design tokens using [Amazon style dictionary](https://amzn.github.io/style-dictionary/#/).

## Why

To eliminate the synchronization gap between design and engineering, we adopt an automated approach to align parameters. Designers can push variable updates from Figma with a single click, and front-end developers can simply reference the converted variables.

## Workflow

1. [Designer] Open figma file and export design tokens through plugin - [`design tokens`](https://www.figma.com/community/plugin/888356646278934516/design-tokens)
2. [Github Workflow] Trigger transform token actions and create PR of variables
3. [FrontEnd] Check Github Repo - [`kg-css-variables`](https://github.com/kryptogo/kg-css-variables) and maintain variables for frontend usage

## Documentation

[Notion - Automated Design Token Integration](https://www.notion.so/kryptogo/Automated-Design-Token-Integration-4e6dc9ed9018447c80e1744c2d9e4a09)
