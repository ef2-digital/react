import { Toggle } from './types';

const toggle: Toggle = {
    VARIANT: {
        DEFAULT: {
            BASE: 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
            primary: 'ui-checked:bg-blue-600 ui-not-checked:bg-gray-200'
        }
    },
    slider: {
        DEFAULT: {
            BASE: 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ui-checked:translate-x-5 ui-not-checked:translate-x-0',
            primary: 'bg-white'
        }
    },
    label: {
        DEFAULT: {
            BASE: 'text-sm font-medium text-gray-400 mr-3',
            primary: ''
        }
    }
};

export default toggle;
