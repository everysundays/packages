# Rack & Rail Grid System - Tailwind CSS Plugin

A powerful and flexible grid system plugin for Tailwind CSS that provides two specialized container types:

- **Rack**: Fixed-width column containers that wrap to the next line (flex-wrap)
- **Rail**: Horizontally scrollable containers with fixed-width columns (no-wrap)

## Installation

```bash
npm install rack-rail-tailwind-plugin
```

## Usage

1. Add the plugin to your `tailwind.config.js` or `tailwind.config.ts` file:

```js
// tailwind.config.js
const rackRailPlugin = require('rack-rail-tailwind-plugin');

module.exports = {
  content: [
    // ...your content files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    rackRailPlugin,
    // ...other plugins
  ],
}
```

For TypeScript:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import rackRailPlugin from 'rack-rail-tailwind-plugin';

const config: Config = {
  content: [
    // ...your content files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    rackRailPlugin,
    // ...other plugins
  ],
};

export default config;
```

2. Use the classes in your HTML:

```html
<!-- Rack container (columns wrap to next line) -->
<div class="rack">
  <div class="col-4">Column 4</div>
  <div class="col-4">Column 4</div>
  <div class="col-4">Column 4</div>
</div>

<!-- Rail container (horizontally scrollable) -->
<div class="rail">
  <div class="col-4">Column 4</div>
  <div class="col-4">Column 4</div>
  <div class="col-4">Column 4</div>
  <div class="col-4">Column 4</div>
  <div class="col-4">Column 4</div>
</div>
```

## Available Classes

### Container Classes
- `.rack` - Container where columns wrap to the next line
- `.rail` - Container where columns don't wrap and can be scrolled horizontally

### Column Classes
- `.col-1` through `.col-12` - Column width classes

### Offset Classes
- `.offset-0` through `.offset-11` - Column offset classes

## Breakpoints

The grid system is designed to work with these breakpoints:

- **sm**: 375px viewport (Available space: 335px after padding)
- **md**: 770px viewport (Available space: 690px after padding)
- **lg**: 1450px viewport (Available space: 1386px after padding)
- **xl**: 1800px viewport (Available space: 1736px after padding)

## Customization

You can customize the grid system by creating your own plugin and importing the grid configuration:

```ts
import { VIEWPORTS, RACK_COLUMNS, RAIL_COLUMNS, OFFSETS } from 'rack-rail-tailwind-plugin';
import plugin from 'tailwindcss/plugin';

// Modify the values as needed
const customViewports = {
  ...VIEWPORTS,
  sm: {
    ...VIEWPORTS.sm,
    containerPadding: 24,
  }
};

// Create your own plugin with the modified values
const customRackRailPlugin = plugin(function({ addComponents, addBase }) {
  // Custom implementation
});

module.exports = customRackRailPlugin;
```

## License

MIT 