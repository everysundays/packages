# Rack-Rail Tailwind Plugin - Folder Structure

This document explains the folder structure and files in this project.

## Project Overview

The Rack-Rail Tailwind Plugin is a responsive grid system for Tailwind CSS that provides two specialized container types:

- **Rack**: Fixed-width column containers that wrap to the next line (flex-wrap)
- **Rail**: Horizontally scrollable containers with fixed-width columns (no-wrap)

## Folder Structure

```
rack-rail-tailwind-plugin/
├── dist/                         # Compiled output (after build)
│   └── .gitkeep                  # Placeholder for git
├── src/                          # Source code
│   ├── index.ts                  # Main entry point
│   ├── grid-config.ts            # Grid configuration settings
│   └── plugin.ts                 # Tailwind plugin implementation
├── demo/                         # Demo files
│   ├── index.html                # Demo page
│   └── styles.css                # Demo styles
├── package.json                  # Project configuration
├── tsconfig.json                 # TypeScript configuration
├── rollup.config.ts              # Build configuration
├── column-width-settings.md      # Documentation of column widths
├── FOLDER_STRUCTURE.md           # This file
├── LICENSE                       # MIT license
└── README.md                     # Main documentation
```

## Key Files

1. **`src/index.ts`**: Main entry point that exports the plugin
2. **`src/grid-config.ts`**: Contains all the grid settings (columns, breakpoints, etc.)
3. **`src/plugin.ts`**: The implementation of the Tailwind CSS plugin
4. **`package.json`**: Package configuration for npm
5. **`demo/index.html`**: A demo page showing how to use the plugin
6. **`README.md`**: Documentation for how to use the plugin

## How to Use

### For Plugin Users

To use this plugin, users need to download the `dist` folder after it's built.

Installation:
```bash
npm install rack-rail-tailwind-plugin
```

Then add it to the Tailwind config file:
```js
// tailwind.config.js
const rackRailPlugin = require('rack-rail-tailwind-plugin');

module.exports = {
  // ...
  plugins: [
    rackRailPlugin,
  ],
}
```

### For Developers

If you want to modify the plugin:

1. Clone the repository
2. Install dependencies: `npm install`
3. Make changes to files in the `src` folder
4. Build the plugin: `npm run build`
5. The compiled output will be in the `dist` folder

## Building the Plugin

Run the following commands:

```bash
npm install
npm run build
```

This will compile the TypeScript code into JavaScript in the `dist` folder, ready for distribution. 