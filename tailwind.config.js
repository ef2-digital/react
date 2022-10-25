/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {},
    plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')]
};
