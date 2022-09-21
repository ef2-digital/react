import ThemeProvider from '../ThemeProvider';
import Button from '../Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'ThemeProvider',
    component: ThemeProvider,
    parameters: {
        docs: {
            description: {
                component:
                    'The ThemeProvider allows you to change theme globally. It is not required if you decide to stick with default theme:'
            }
        }
    },
    subcomponents: { Button }
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = ({ ...props }) => (
    <ThemeProvider {...props}>
        <Button>Button</Button>
    </ThemeProvider>
);

export const Orange = Template.bind({});

Orange.args = {
    theme: {
        button: {
            variant: {
                DEFAULT: { primary: 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500' }
            }
        }
    }
};

export const Pink = Template.bind({});

Pink.args = {
    theme: {
        button: {
            variant: {
                DEFAULT: { primary: 'bg-pink-600 rounded-none hover:bg-pink-700 focus:ring-pink-500' }
            }
        }
    }
};
