import Rating from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

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

export const Primary = Template.bind({});
Primary.args = { ...Default.args, classNameActive: '!fill-primary', classNameEmpty: '!fill-primary' };

export const ReadOnly = Template.bind({});
ReadOnly.args = { ...Default.args, readOnly: true };
