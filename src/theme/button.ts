import { Button } from './types';

const button: Button = {
    variant: {
        DEFAULT: {
            BASE: 'inline-flex items-center rounded-md border border-transparent text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
            primary: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
        },
        outline: {
            BASE: 'inline-flex items-center rounded-md border bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
            primary: 'border-indigo-300 text-indigo-700 hover:bg-indigo-50'
        }
    },
    size: {
        sm: 'px-4 py-2 text-sm font-medium',
        DEFAULT: 'px-4 py-2 text-base font-medium',
        lg: 'px-6 py-3 text-base font-medium',
    }
};

export default button;
