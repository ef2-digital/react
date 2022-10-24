import { Modal } from './types';

const modal: Modal = {
    overlay: {
        DEFAULT: 'fixed inset-0 bg-black/30',
    },
    variant: {
        DEFAULT: {
            BASE: 'relative transform overflow-hidden rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6',
            primary: 'bg-white'
        }
    }
};

export default modal;
