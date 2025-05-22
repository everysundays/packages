# PSP Designer Tools

This repository contains a Tailwind CSS demo project with organized structure.

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
9. npm install twlayout-plugin
10. Add to tailwind.config.js:
    ```js
    plugins: [
      require('twlayout-plugin'),
    ],
    ```

### Important Note

The npm install command adds the plugin to your project's node_modules directory. This is crucial because when you use `require('twlayout-plugin')` in your config file, Node.js looks for the package in node_modules. Without installing first, the require statement would fail since the JavaScript module system wouldn't know where to find the plugin code. This pattern ensures proper dependency management and versioning.

## Update the whole working environment (your files will be saved)

```
git pull origin main
```

For a good TailwindCSS cheatsheet for your work, visit https://tailwindcss.504b.cc/

## Project Structure

- `twlayout-plugin/styles/` - Core CSS styles
  - `layout.css` - Core implementation for Rack & Rail grid system
  - `debug.css` - Debug mode styling for grid visualization
- `twlayout-plugin/scripts/` - JavaScript utilities
  - `debug-mode.js` - Adds debug visualization to your layouts
- `twlayout-plugin/demo/` - Documentation and examples

## Debug Mode

Provides a way to apply debug mode styling to any HTML page. This is useful for visualizing the grid layout.

### How to Use

In this default environment, include the script in your HTML file:
```html
<script type="module" src="../twlayout-plugin/scripts/debug-mode.js"></script>
```
The script will automatically inject a "Debug Mode" toggle switch onto the page.

## License
MIT

