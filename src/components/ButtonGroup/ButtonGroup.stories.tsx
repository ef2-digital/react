import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';
import ButtonGroup from './';

export default {
    title: 'Input/ButtonGroup',
    component: ButtonGroup,
    subcomponents: { Button }
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = ({ ...props }) => (
    <ButtonGroup {...props}>
        <Button>Years</Button>
        <Button>Months</Button>
        <Button>Days</Button>
    </ButtonGroup>
);

export const Default = Template.bind({});
