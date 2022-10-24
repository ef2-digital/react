import ThemeProvider from '.';
import Button from '../Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Copyright from '../Copyright';
import Rating from '../Rating';

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

const Template: ComponentStory<typeof ThemeProvider> = ({ ...props }) => (
    <ThemeProvider {...props}>
        <div className="mt-8 grid grid-cols-2 gap-0.5">
            <div className="col-span-1 flex justify-center items-center bg-gray-100 py-8 px-8">
                <Button className="mr-3">Button</Button>
            </div>
            <div className="col-span-1 flex justify-center items-center bg-gray-100 py-8 px-8">
                <Rating value={3} />
            </div>
            <div className="col-span-1 flex justify-center items-center bg-gray-100 py-8 px-8">
                <Copyright />
            </div>
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
                    primary: 'shadow-indigo-800 hover:shadow-indigo-900 focus:shadow-indigo-900'
                }
            }
        },
        rating: {
            active: { DEFAULT: { primary: 'drop-shadow-[3px_3px_0_rgba(0,0,0,0.25)]' } }
        },
        toggle: {
            variant: {
                DEFAULT: {
                    BASE: 'transition-shadow rounded-none shadow-[3px_3px_0_0] hover:shadow-[4px_4px_0_0] focus:shadow-[4px_4px_0_0]',
                    primary: 'shadow-indigo-800 hover:shadow-indigo-900 focus:shadow-indigo-900'
                }
            }
        },
        copyright: {
            variant: {
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
            variant: {
                DEFAULT: { BASE: 'border-none', primary: 'bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl' }
            }
        },
        toggle: {
            variant: {
                DEFAULT: { primary: 'bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl' }
            }
        },
        copyright: {
            variant: {
                DEFAULT: {
                    primary:
                        '[&>span]:bg-gradient-to-br [&>span]:from-green-400 [&>span]:to-blue-600 [&>span]:bg-clip-text [&>span]:text-transparent [&>svg]:fill-blue-600'
                }
            }
        }
    }
};

// export const Locale = Template.bind({});
// Locale.args = {
//     lng: 'nl'
// }
