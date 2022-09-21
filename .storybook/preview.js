import { MockedProvider } from '@apollo/client/testing';
import '../src/styles.css';

export const parameters = {
    apolloClient: {
        MockedProvider
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};
