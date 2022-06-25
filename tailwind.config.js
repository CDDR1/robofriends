/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'myGradient-from': 'rgba(0, 128, 128, 1)',
                'myGradient-to': 'rgba(7, 27, 82, 1)',
            },
        },
    },
    plugins: [],
};