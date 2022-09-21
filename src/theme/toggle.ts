import { Toggle } from './types';

const toggle: Toggle = {
    variant: {
        DEFAULT: {
            BASE: 'relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded hover:shadow-md focus:shadow-md focus:outline-dashed focus:outline-1 focus:outline-offset-4',
            primary: 'bg-secondary hover:bg-secondary-700 focus:outline-secondary focus:border-secondary-700 focus:bg-secondary'
        }
    }
};

export default toggle;
