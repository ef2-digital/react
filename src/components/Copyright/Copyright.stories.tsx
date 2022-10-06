import Copyright from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Display/Copyright',
    component: Copyright,
    parameters: {
        backgrounds: { default: 'dark' }
    }
} as ComponentMeta<typeof Copyright>;

const Template: ComponentStory<typeof Copyright> = ({ ...props }) => <Copyright {...props} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = { ...Default.args, className: 'text-primary hover:text-primary-600' };

export const Mixed = Template.bind({});
Mixed.args = { ...Default.args, className: '[&>svg]:fill-primary' };

export const Label = Template.bind({});
Label.args = { ...Default.args, label: 'Ontwerp door', screenReader: 'EF3' };
