import { Rating } from './types';

const rating: Rating = {
    variant: {
        DEFAULT: {
            DEFAULT: 'flex',
            primary: ''
        }
    },
    active: {
        DEFAULT: {
            DEFAULT: '',
            primary: 'fill-yellow-400'
        }
    },
    empty: {
        DEFAULT: {
            DEFAULT: '',
            primary: 'fill-gray-300'
        }
    }
};

export default rating;
