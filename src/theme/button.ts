import { Button } from './types';

const button: Button = {
    VARIANT: {
        DEFAULT: {
            BASE: '[&>svg]:fill-current inline-flex justify-center items-center rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-500',
            primary: 'text-white bg-indigo-600 hover:bg-indigo-700',
            secondary: 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200'
        },
        outline: {
            BASE: 'inline-flex items-center justify-center rounded border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-50',
            primary: 'border-indigo-600 text-indigo-600 focus:ring-indigo-500',
            secondary: 'border-indigo-100 text-indigo-600 focus:ring-indigo-100'
        }
    },
    size: {
        sm: 'px-4 py-2 text-sm font-medium',
        DEFAULT: 'px-4 py-2 text-base font-medium',
        lg: 'px-6 py-3 text-base font-medium'
    }
};

export default button;
