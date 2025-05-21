# Rack & Rail Grid System - Tailwind Plugin

A powerful Tailwind CSS plugin that implements the Rack & Rail Grid System, providing advanced layout capabilities beyond what's available in standard CSS grid systems.

## Features

- Responsive grid layouts with configurable breakpoints
- Customizable grid columns, gutters, and margins
- Full compatibility with existing Tailwind CSS projects
- Advanced positioning and alignment utilities
- Automatic container sizing based on content

## Installation

1. Install the plugin and its dependencies:
   ```bash
   npm install tailwindcss@4.1.5 @tailwindcss/cli postcss autoprefixer twlayout-plugin --save-dev
   ```

2. Add the plugin to your `tailwind.config.ts`:
   ```js
   module.exports = {
     // ...other config
     plugins: [
       require('twlayout-plugin'),
       // ...other plugins
     ],
   }
   ```

3. Configure the plugin (optional):
   ```js
   module.exports = {
     theme: {
       // ...other theme settings
       twlayout: {
         // Custom configuration options here
       }
     },
     plugins: [
       require('twlayout-plugin'),
     ],
   }
   ```

## Usage

```html
<div class="rr-container">
  <div class="rr-row">
    <div class="rr-col-6 md:rr-col-4 lg:rr-col-3">
      <!-- Content -->
    </div>
    <!-- More columns -->
  </div>
</div>
```

## Documentation

For complete documentation and examples, visit:
[Documentation Link]

## Project Structure

- `src/scripts/grid-config.js` - Grid system configuration
- `src/scripts/twlayout-plugin.ts` - Plugin implementation
- `src/styles/` - Optional CSS utility files

## License

ISC 