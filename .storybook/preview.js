import '../src/styles.css';
import ThemeProvider from '../src/components/ThemeProvider';

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
        const langGlobal = context.globals.locale;
        const langComponent = context.args?.lng;

        if (context.componentId === 'themeprovider') {
            return <>{Story()}</>;
        }

        return <ThemeProvider lng={langComponent ?? langGlobal}>{Story()}</ThemeProvider>;
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
