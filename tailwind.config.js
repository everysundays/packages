/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./workfiles/**/*.html",
      "./workfiles/**/*.{js,jsx,ts,tsx}",
      "./twlayout-plugin/demo/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("./twlayout-plugin/scripts/twlayout-plugin")
  ],
} 