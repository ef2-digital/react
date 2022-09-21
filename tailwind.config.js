/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#063B7D',
                    50: '#0A64D5',
                    100: '#0A60CB',
                    200: '#0957B7',
                    300: '#084DA4',
                    400: '#074490',
                    500: '#063B7D',
                    600: '#05326A',
                    700: '#042956',
                    800: '#031F43',
                    900: '#02162F'
                },
                secondary: {
                    DEFAULT: '#EB0037',
                    50: '#FF4873',
                    100: '#FF3E6B',
                    200: '#FF295B',
                    300: '#FF154C',
                    400: '#FF003C',
                    500: '#EB0037',
                    600: '#D70032',
                    700: '#C2002D',
                    800: '#AE0029',
                    900: '#990024'
                }
            }
        }
    },
    plugins: []
};
