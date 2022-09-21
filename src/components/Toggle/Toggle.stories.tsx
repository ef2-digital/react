import Toggle from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Disclosure } from '@headlessui/react';

export default {
    title: 'Menu/Toggle',
    component: Toggle
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = ({ ...props }) => (
    <Disclosure>
        <Toggle {...props} />
    </Disclosure>
);

export const Default = Template.bind({});
