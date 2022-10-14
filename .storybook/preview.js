import '../src/styles.css';
import ThemeProvider, { useThemeContext } from '../src/components/ThemeProvider';
import { useEffect } from 'react';

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', right: '🇺🇸', title: 'English' },
                { value: 'nl', right: '🇳🇱', title: 'Dutch' }
            ]
        }
    }
};

export const decorators = [
    (Story, context) => {
        const locale = context.globals.locale;
        const { i18n } = useThemeContext();

        useEffect(() => {
            i18n.changeLanguage(locale);
        }, [i18n, locale]);

        return <ThemeProvider>{Story()}</ThemeProvider>;
    }
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background)$/i,
            date: /Date$/
        }
    }
};
