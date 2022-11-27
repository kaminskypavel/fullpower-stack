/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                fade: 'fadeOut 2s ease-in-out',
            },
            keyframes: theme => ({
                fadeOut: {
                    '0%': { backgroundColor: theme('colors.yellow.100') },
                    '100%': { backgroundColor: theme('colors.transparent') },
                },
            }),
        },
    },
    variants: {},
    plugins: [],
};