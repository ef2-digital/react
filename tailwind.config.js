/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@ef2/react/lib/**/*.js'],
    theme: {},
    plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')]
};
