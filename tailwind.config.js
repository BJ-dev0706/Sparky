/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "Marker": "Marker"
            },
            backgroundColor: {
                "gradient": "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgb(210 49 249) 0%, rgb(44 237 170) 100%)"
            },
            textShadow: {
                'custom': '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
                'sm': '-4px 0 black, 0 4px black, 4px 0 black, 0 -4px black',
                'md': '-6px 0 black, 0 6px black, 6px 0 black, 0 -6px black',
                'lg': '-8px 0 black, 0 8px black, 8px 0 black, 0 -8px black',
            }
        },
    },
    plugins: [
        require('tailwindcss-textshadow'), // Add the text shadow plugin
    ],
}