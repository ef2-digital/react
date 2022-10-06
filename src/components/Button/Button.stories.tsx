import Button from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '../Icon';
// import Clean from '@material-symbols/svg-600/rounded/clean_hands.svg';

export default {
    title: 'Input/Button',
    component: Button,
    subcomponents: { Icon },
    parameters: {
        docs: {
            description: {
                component: 'Some component _markdown_'
            }
        }
    },
    argTypes: {
        children: {
            control: 'text'
        },
        variant: {
            options: [undefined, 'outline'],
            control: 'radio'
        },
        color: {
            options: [undefined, 'primary', 'secondary'],
            control: 'radio'
        },
        size: {
            options: [undefined, 'sm', 'lg'],
            control: 'radio'
        },
        as: {
            options: ['button', 'a'],
            control: 'radio'
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ ...props }) => <Button {...props} />;

export const Default = Template.bind({});
Default.args = { children: 'Button', color: 'primary', rounded: false };

export const Outline = Template.bind({});
Outline.args = { ...Default.args, variant: 'outline' };

export const StartIcon = Template.bind({});
StartIcon.args = { ...Default.args, startIcon: 'bed' };

export const EndIcon = Template.bind({});
EndIcon.args = { ...Default.args, endIcon: 'bed' };
