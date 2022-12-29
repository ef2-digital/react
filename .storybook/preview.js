import '../src/styles.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background)$/i,
            date: /Date$/
        }
    }
};
