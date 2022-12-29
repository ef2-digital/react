import ScrollHeader from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { classNames } from '../../utils/theme';

export default {
    title: 'Utils/ScrollHeader',
    component: ScrollHeader
} as ComponentMeta<typeof ScrollHeader>;

const Template: ComponentStory<typeof ScrollHeader> = ({ ...props }) => {
    return <ScrollHeader {...props} />;
};

export const Default = Template.bind({});
Default.args = {
    children: ({ top }: { top: number }) => <div className={classNames({ 'bg-red-400': !!top })}>{top ? 'true' : 'false'}</div>
};
