/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#DEDC00',
                    300: '#FFFD08',
                    400: '#F2F000',
                    500: '#DEDC00',
                    600: '#CAC800',
                    700: '#B5B400',
                    800: '#A19F00',
                    900: '#8C8B00'
                },
            }
        }
    },
    plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')]
};
