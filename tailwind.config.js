/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./workfiles/**/*.html", 
      "./workfiles/**/*.{js,jsx,ts,tsx}",
      "./packages/layoutsystem/demo/**/*.html"
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    // Disable Tailwind's grid column utilities that conflict with our layout system
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
  },
  plugins: [
    require("./packages/layoutsystem/scripts/twlayout-plugin")
  ],
} 