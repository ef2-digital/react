import Rating from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from '../ThemeProvider';
import { useArgs } from '@storybook/client-api';

export default {
    title: 'Input/Rating',
    component: Rating
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = ({ ...props }) => {
    const [{ value }, updateArgs] = useArgs();

    const handleOnChange = (value: number) => {
        updateArgs({ value });
    };

    return <Rating {...props} value={value} onChange={handleOnChange} />;
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
                            primary: 'fill-emerald-500'
                        }
                    },
                    empty: {
                        DEFAULT: {
                            primary: 'fill-emerald-500'
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
                            primary: 'fill-red-400'
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
