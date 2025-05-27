# Tailwind Layout Plugin - Rack & Rail Grid System

A responsive grid system with two container types: **Rack** (flexible columns that wrap) and **Rail** (horizontally scrollable columns). Built as a local Tailwind CSS plugin development environment.

## Installation

Follow these steps to set up the project:

1. Create a blank folder
2. Open Terminal
3. npm init -y
4. npm install tailwindcss@4.1.5 @tailwindcss/cli autoprefixer postcss @types/node @types/tailwindcss --save-dev
5. rm package.json package-lock.json
   (Because we will use ones from git)
6. git init
7. git remote add origin https://github.com/everysundays/psp-designertools.git
8. git pull origin main


## Quick Start

1. **Build the CSS:**
   ```bash
   npm run build
   ```

2. **Start development server:**
   ```bash
   cd workfiles && python3 -m http.server 8000
   ```

3. **View the demo:** Open http://localhost:8000/demo.html

## Update the whole working environment (your files will be saved)

```
git pull origin main && npm run build
```

## Core Concepts

### Container Types
- **`.rack`** - Flexible grid with wrapping columns (like Bootstrap's row/col system)
- **`.rail`** - Horizontal scrolling container with fixed-width columns

### Column System
- **`.col-1` through `.col-12`** - Responsive column widths
- **`.offset-0` through `.offset-11`** - Centering offsets for both rack and rail

### Responsive Breakpoints
- **sm:** 375px (mobile)
- **md:** 770px (tablet) 
- **lg:** 1450px (desktop)
- **xl:** 1800px (large desktop)

## Usage Examples

### Rack Container (Wrapping Grid)
```html
<div class="rack">
  <div class="col-6">Half width</div>
  <div class="col-6">Half width</div>
  <div class="col-9 offset-3">Centered 9-column content</div>
</div>
```

### Rail Container (Horizontal Scroll)
```html
<div class="rail">
  <div class="col-4">Fixed width card</div>
  <div class="col-4">Fixed width card</div>
  <div class="col-4">Fixed width card</div>
  <div class="col-6 offset-6">Centered rail content</div>
</div>
```

## Project Structure

- `twlayout-plugin/styles/` - Core CSS styles
  - `layout.css` - Core implementation for Rack & Rail grid system
  - `debug-mode.css` - Debug mode styling for grid visualization
- `twlayout-plugin/scripts/` - JavaScript utilities and plugin
  - `twlayout-plugin.js` - Main Tailwind CSS plugin
  - `debug-mode.js` - Debug visualization tool
  - `grid-config.js` - Grid system configuration
- `twlayout-plugin/demo/` - Documentation and examples
- `workfiles/` - Development files and demos
  - `demo.html` - Complete documentation and examples
  - `styles/` - Input CSS files

## Debug Mode

Provides visual debugging for grid layouts with territory lines and spacing indicators.

### How to Use

Include the script in your HTML file:
```html
<script type="module" src="../twlayout-plugin/scripts/debug-mode.js"></script>
```
The script automatically adds a "Debug Mode" toggle switch to visualize grid structure.

**Note:**
- Any HTML file in `workfiles/` that references `debug-mode.js` **must** include the correct script tag as shown above.
- The integration test suite will check all HTML files in `workfiles/` and fail if the script tag is missing or malformed when `debug-mode.js` is referenced.

## Development

- **Build CSS:** `npm run build`
- **Watch mode:** `npm run watch` 
- **Start dev:** `npm run start`

For a good TailwindCSS cheatsheet
1. Cheatsheet https://tailwindcss.504b.cc/
2. Flexbox examples https://www.shortcutfoo.com/app/dojos/tailwind-flexbox/cheatsheet

## License
MIT

