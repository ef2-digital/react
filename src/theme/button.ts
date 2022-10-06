import { Button } from './types';

const button: Button = {
    variant: {
        DEFAULT: {
            BASE: '[&>svg]:fill-current inline-flex items-center rounded-md text-white shadow-sm focus:outline-dashed focus:outline-1 focus:outline-offset-4',
            primary: 'bg-primary hover:bg-primary-700 focus:outline-primary',
            secondary: 'bg-secondary hover:bg-secondary-700 focus:outline-secondary'
        },
        outline: {
            BASE: 'inline-flex items-center rounded-md border bg-white px-4 hover:bg-gray-100 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
            primary: 'border-primary-300 text-primary-700',
            secondary: 'border-secondary-300 text-secondary-700'
        }
    },
    size: {
        sm: 'px-4 py-2 text-sm font-medium',
        DEFAULT: 'px-4 py-2 text-base font-medium',
        lg: 'px-6 py-3 text-base font-medium'
    }
};

export default button;
