import FormControl from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Input/FormControl',
    component: FormControl,
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = ({ ...props }) => <FormControl {...props} />;

export const Default = Template.bind({});