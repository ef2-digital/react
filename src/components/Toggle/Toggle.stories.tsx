import Toggle from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

export default {
    title: 'Input/Toggle',
    component: Toggle
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = ({ ...props }) => {
    const [{ checked }, updateArgs] = useArgs();

    const onChange = (checked: boolean) => {
        updateArgs({ checked });
    };

    return <Toggle {...props} checked={checked} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = { checked: false };
