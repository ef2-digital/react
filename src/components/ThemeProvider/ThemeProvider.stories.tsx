import ThemeProvider from '../ThemeProvider';
import Button from '../Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from '../Toggle';
import { Disclosure } from '@headlessui/react';

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
    subcomponents: { Button, Toggle }
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = ({ ...props }) => (
    <ThemeProvider {...props}>
        <div className="flex">
            <Button className="mr-3">Button</Button>
            <Disclosure>
                <Toggle open />
            </Disclosure>
        </div>
    </ThemeProvider>
);

export const Teal = Template.bind({});

Teal.args = {
    theme: {
        button: {
            variant: {
                DEFAULT: {
                    BASE: 'transition-shadow rounded-none shadow-[3px_3px_0_0] hover:shadow-[4px_4px_0_0] focus:shadow-[4px_4px_0_0]',
                    primary: 'shadow-primary-700 hover:shadow-primary-900 focus:shadow-primary-900'
                }
            }
        },
        toggle: {
            variant: {
                DEFAULT: {
                    BASE: 'transition-shadow rounded-none shadow-[3px_3px_0_0] hover:shadow-[4px_4px_0_0] focus:shadow-[4px_4px_0_0]',
                    primary: 'shadow-primary-700 hover:shadow-primary-900 focus:shadow-primary-900'
                }
            }
        }
    }
};

export const Gradient = Template.bind({});

Gradient.args = {
    theme: {
        button: {
            variant: {
                DEFAULT: { BASE: 'border-none', primary: 'bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl' }
            }
        },
        toggle: {
            variant: {
                DEFAULT: { primary: 'bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl' }
            }
        }
    }
};
