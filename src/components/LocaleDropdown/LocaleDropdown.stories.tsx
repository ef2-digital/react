import LocaleDropdown from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactNode } from 'react';

export default {
    title: 'Dropdown/LocaleDropdown',
    component: LocaleDropdown
} as ComponentMeta<typeof LocaleDropdown>;

const Template: ComponentStory<typeof LocaleDropdown> = ({ ...props }) => <LocaleDropdown {...props} />;

export const Default = Template.bind({});
Default.args = { locale: 'nl', locales: ['nl', 'en'], renderLink: ({ children }: { children: ReactNode }) => <a>{children}</a> };
