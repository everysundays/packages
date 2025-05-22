# PSP Designer Tools

This repository contains a Tailwind CSS demo project with organized structure.

## Setup Instructions

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
9. npm run start

This will build the CSS using Tailwind and open the index.html file in your browser.

## Project Structure

- `workfiles/` - Contains HTML files and styles <- Put your .html files here
- `workfiles/styles/` - CSS source files <- Put your main.css here
- `dist/` - Output directory for compiled CSS (created after first build)
- `twlayout-plugin/` - Tailwind layout plugin


## Available Scripts

- `npm run build` - Build the CSS
- `npm run watch` - Watch for changes and rebuild CSS
- `npm run start` - Build CSS and open the demo page


## Dependencies

- Tailwind CSS v4.1.5
- PostCSS
- Autoprefixer

## Universal Debug Mode

The `twlayout-plugin/scripts/universal-debug.js` script provides a way to apply the plugin's debug mode styling (defined in `twlayout-plugin/styles/decoration.css`) to any HTML page, not just the main `demo.html`. This is useful for testing the grid layout on different HTML structures or standalone components.

### How to Use

1.  Include the script in your HTML file:
    ```html
    <script type="module" src="path/to/twlayout-plugin/scripts/universal-debug.js"></script>
    ```
    Ensure you replace `path/to/` with the correct relative path from your HTML file to the `twlayout-plugin` directory. For example, if your HTML file is in `workfiles/`, the path would be `../twlayout-plugin/scripts/universal-debug.js`.

2.  The script will automatically:
    *   Load the necessary `decoration.css` stylesheet into the page's `<head>`.
    *   Inject a "Debug Mode" toggle switch (a checkbox and label) onto the page, typically at the bottom.

3.  Use the toggle switch to turn debug mode on or off. The state is saved in `localStorage`, so your preference will be remembered across page loads.

### Scope of Debug Styles

The debug styles, as defined in `decoration.css`, primarily target elements with `.rack` and `.rail` classes and their direct children (columns). It will visually outline these grid components, show padding, gaps, and other layout-related visual cues. It may not provide detailed debug information for elements outside of this primary scope.
