/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        screens: {
            sm: {"max": "920px"},
        },
        extend: {
            fontFamily: {
                "main": ["Work Sans", "sans-serif"],
            }
        },
    },
    plugins: [],
}

