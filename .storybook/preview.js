import '../src/styles.css';
import ThemeProvider from '../src/components/ThemeProvider';
// import i18next from 'i18next';
// import { useEffect } from 'react';

// export const globalTypes = {
//     locale: {
//         name: 'Locale',
//         description: 'Internationalization locale',
//         defaultValue: 'en',
//         toolbar: {
//             icon: 'globe',
//             items: [
//                 { value: 'en', right: '🇺🇸', title: 'English' },
//                 { value: 'nl', right: '🇳🇱', title: 'Dutch' }
//             ]
//         }
//     }
// };

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background)$/i,
            date: /Date$/
        }
    }
};
