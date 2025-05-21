# PSP Designer Tools

This repository setup framework and tools for frontend designer.

## Repository Structure

Each tool/plugin is developed independently in its own directory with a dedicated Git repository. This allows for individual versioning and development workflows.

```
psp-designertools/
├── twlayout-plugin/       # Rack & Rail Grid System Tailwind Plugin
├── workfiles/             # index.html for your jumpstart, and demo files
└── [future projects...]   # More tools coming soon
```

## Projects

### twlayout-plugin

A Tailwind CSS plugin that implements the Rack & Rail Grid System. This plugin provides advanced layout capabilities beyond what's available in standard CSS grid systems.

## Installation

1. Install the required dependencies:
 
   ```bash
   npm init -y
   npm install tailwindcss@4.1.5 @tailwindcss/cli autoprefixer postcss @types/node @types/tailwindcss --save-dev
   ```

2. Add the following scripts to your `package.json` file:

   ```json
   "scripts": {
    "build": "tailwindcss -i ./workfiles/styles/main.css -o ./dist/output.css",
    "watch": "tailwindcss -i ./workfiles/styles/main.css -o ./dist/output.css --watch",
    "start": "npm run build:css && open workfiles/index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
   }
   ```
   
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
