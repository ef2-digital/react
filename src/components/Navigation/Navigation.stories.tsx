import Navigation from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Menu/Navigation',
    component: Navigation,
    parameters: {
        layout: 'fullscreen',
        backgrounds: { default: 'dark' }
    }
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = ({ ...props }) => <Navigation {...props} />;

export const Default = Template.bind({});
Default.args = {
    logo: <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">Logo</span>,
    fixed: false
};
