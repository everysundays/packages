/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./demo/**/*.html",
      "./src/**/*.css"
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
    require("./scripts/twlayout-plugin")
  ],
} 