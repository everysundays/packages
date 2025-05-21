# Rack & Rail Grid System - Tailwind Plugin

A powerful Tailwind CSS plugin that implements the Rack & Rail Grid System, providing advanced layout capabilities beyond what's available in standard CSS grid systems.

## Features

- Responsive grid layouts with configurable breakpoints
- Customizable grid columns, gutters, and margins
- Full compatibility with existing Tailwind CSS projects
- Advanced positioning and alignment utilities
- Automatic container sizing based on content

## Installation

1. Install the required dependencies:
 
   ```bash
   npm init -y
   npm install tailwindcss@4.1.5 @tailwindcss/cli autoprefixer postcss @types/node @types/tailwindcss --save-dev
   ```

2. Add the following scripts to your `package.json` file:

   ```json
   "scripts": {
     "build": "tailwindcss -i ./twlayout-plugin/src/styles/main.css -o ./twlayout-plugin/dist/output.css",
     "watch": "tailwindcss -i ./twlayout-plugin/src/styles/main.css -o ./twlayout-plugin/dist/output.css --watch"
   }
   ```

3. Clone the twlayout-plugin repository using git

## Usage

```html
<div class="rack">
  <div class="col-7 offset-5">
    <!-- Content -->
  </div>
</div>
```

## License

MIT