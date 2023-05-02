import Slider from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactNode } from 'react';

export default {
    title: 'Slider',
    component: Slider
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = ({ ...props }) => <Slider {...props} />;

export const Default = Template.bind({});
Default.args = {
    options: { loop: true, slidesToScroll: 1 },
    autoplay: {},
    slideClassName: 'min-w-0 flex-1',
    sliderWrapperClassNames: 'embla overflow-hidden',
    sliderViewportClassNames: 'embla__viewport',
    sliderInnerWrapperClassNames: 'embla__container',
    renderChildren: ({ children }: { children: ReactNode }) => {
        children;
    }
};
