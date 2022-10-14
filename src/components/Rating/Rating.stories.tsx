import Rating from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import ThemeProvider from '../ThemeProvider';

export default {
    title: 'Input/Rating',
    component: Rating,
    argTypes: {
        value: {
            control: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = ({ ...props }) => {
    const [value, setValue] = useState<number>(props.value ?? 1);

    return (
        <Rating
            {...props}
            value={value}
            onChange={
                props.readOnly
                    ? undefined
                    : (value) => {
                          props.onChange && props.onChange(value);
                          setValue(value);
                      }
            }
        />
    );
};

export const Default = Template.bind({});
Default.args = { value: 3, readOnly: false };

export const Theme = Template.bind({});
Theme.args = { ...Default.args };
Theme.decorators = [
    (Story) => (
        <ThemeProvider
            theme={{
                rating: {
                    active: {
                        DEFAULT: {
                            primary: 'fill-[#FF7A00]'
                        }
                    },
                    empty: {
                        DEFAULT: {
                            primary: 'fill-[#FF7A00]'
                        }
                    }
                }
            }}
        >
            {Story()}
        </ThemeProvider>
    )
];

export const Icon = Template.bind({});
Icon.parameters = {
    docs: {
        description: {
            story: 'Choose a default icon or add icons with your theme provider.'
        }
    }
};
Icon.args = { ...Default.args, emptyIcon: 'favorite', activeIcon: 'favoriteFill' };
Icon.decorators = [
    (Story) => (
        <ThemeProvider
            theme={{
                rating: {
                    active: {
                        DEFAULT: {
                            primary: 'fill-[#FF528C]'
                        }
                    }
                }
            }}
        >
            {Story()}
        </ThemeProvider>
    )
];

export const Color = Template.bind({});
Color.args = { ...Default.args, classNameActive: '!fill-[#FF7A00]', classNameEmpty: '!fill-[#FF7A00]' };
Color.parameters = {
    docs: {
        description: {
            story: 'When you need specific styling. For global theming, use the theme provider!'
        }
    }
};

export const ReadOnly = Template.bind({});
ReadOnly.args = { ...Default.args, readOnly: true };
