import { Rating } from './types';

const rating: Rating = {
    VARIANT: {
        DEFAULT: {
            BASE: 'flex',
            primary: ''
        }
    },
    active: {
        DEFAULT: {
            BASE: '',
            primary: 'fill-yellow-400'
        }
    },
    empty: {
        DEFAULT: {
            BASE: '',
            primary: 'fill-gray-300'
        }
    }
};

export default rating;
