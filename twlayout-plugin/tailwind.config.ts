const path = require('path');

module.exports = {
    content: [
        "./*.{html,js,jsx,ts,tsx}",
        "./**/*.{html,js,jsx,ts,tsx}",
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "../workfiles/**/*.{html,js,jsx,ts,tsx}"
    ],
    safelist: [
        'bg-blue-600',
        'h-6'
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    600: '#2563eb'
                }
            },
            height: {
                6: '1.5rem'
            }
        },
    },
    plugins: [
        require("./src/scripts/twlayout-plugin")
    ],
};  