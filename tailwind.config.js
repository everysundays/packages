/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "index.html",
      "./workfiles/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("./twlayout-plugin/scripts/twlayout-plugin")
  ],
} 