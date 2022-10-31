import { Resource } from './types';

const resources: Resource = {
    en: {
        input: {
            rating: {
                rating: 'Your rating',
                star_one: '{{count}} star',
                star_other: '{{count}} stars'
            }
        },
        common: {
            close: 'Close',
            copyright: 'Built by',
            newWindow: '(opens in new window)'
        }
    },
    nl: {
        input: {
            rating: {
                rating: 'Je beoordeling',
                star_one: '{{count}} ster',
                star_other: '{{count}} sterren'
            }
        },
        common: {
            close: 'Sluiten',
            copyright: 'Gebouwd door',
            newWindow: '(opent in een nieuw venster)'
        }
    }
};

export default resources;
