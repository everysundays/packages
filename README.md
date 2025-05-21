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
