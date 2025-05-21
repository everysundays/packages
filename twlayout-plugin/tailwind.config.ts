const path = require('path');

module.exports = {
    content: [
        "index.html",
        "./src/**/*.{html,js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require("./src/scripts/twlayout-plugin")
    ],
};  