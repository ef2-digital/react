import ThemeProvider from '.';
import Button from '../Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Copyright from '../Copyright';
import Rating from '../Rating';
import Toggle from '../Toggle';
import { useArgs } from '@storybook/client-api';
import FormControl from '../FormControl';

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
    argTypes: {
        lng: {
            options: ['nl', 'en'],
            control: 'radio'
        }
    }
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = ({ ...props }) => {
    const [{ lng }, updateArgs] = useArgs();

    const toggle = (checked: boolean) => {
        updateArgs({ lng: checked ? 'nl' : 'en' });
    };

    return (
        <ThemeProvider {...props}>
            <div className="mt-8 grid grid-cols-2 gap-0.5">
                <div className="col-span-1 flex justify-center items-center bg-gray-100 py-8 px-8">
                    <Button className="mr-3">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                </div>
                <div className="col-span-1 flex justify-center items-center bg-gray-100 py-8 px-8">
                    <Rating value={3} />
                </div>
                <div className="col-span-1 flex justify-center items-center bg-gray-100 py-8 px-8">
                    <Copyright />
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center bg-gray-100 py-8 px-8">
                    <Toggle checked={lng === 'nl'} onChange={toggle} label="Toggle dutch language" />
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center bg-gray-100 py-8 px-8">
                    <FormControl placeholder="you@example.com" />
                </div>
            </div>
        </ThemeProvider>
    );
};

export const Teal = Template.bind({});
Teal.args = {
    theme: {
        button: {
            VARIANT: {
                DEFAULT: {
                    BASE: 'transition-shadow rounded-none shadow-[3px_3px_0_0] hover:shadow-[4px_4px_0_0] focus:shadow-[4px_4px_0_0]',
                    primary: 'shadow-indigo-800 hover:shadow-indigo-900 focus:shadow-indigo-900',
                    secondary: 'shadow-indigo-300 hover:shadow-indigo-400 focus:shadow-indigo-400'
                }
            }
        },
        rating: {
            active: { DEFAULT: { primary: 'drop-shadow-[3px_3px_0_rgba(0,0,0,0.25)]' } }
        },
        copyright: {
            VARIANT: {
                DEFAULT: {
                    primary: 'text-gray-400'
                }
            }
        }
    }
};

export const Gradient = Template.bind({});
Gradient.args = {
    theme: {
        button: {
            VARIANT: {
                DEFAULT: { BASE: 'border-none', primary: 'bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl' }
            }
        },
        copyright: {
            VARIANT: {
                DEFAULT: {
                    primary:
                        '[&>span]:bg-gradient-to-br [&>span]:from-green-400 [&>span]:to-blue-600 [&>span]:bg-clip-text [&>span]:text-transparent [&>svg]:fill-blue-600'
                }
            }
        }
    }
};
