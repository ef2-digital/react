import { cloneElement, Children } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { classNames } from '../../utils/theme';
import { PropsWithChildren } from 'react';
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay';

export interface SliderProps {
    sliderWrapperClassNames?: string;
    sliderInnerWrapperClassNames?: string;
    sliderViewportClassNames?: string;
    slideClassName?: string;
    options?: EmblaOptionsType;
    autoplay?: AutoplayOptionsType;
}

const Slider = ({
    sliderWrapperClassNames,
    sliderViewportClassNames,
    sliderInnerWrapperClassNames,
    slideClassName,
    options,
    autoplay,
    children
}: PropsWithChildren<SliderProps>) => {
    const emblaOptions: EmblaOptionsType = options;

    let emblaPlugins = [autoplay && Autoplay(autoplay)];
    emblaPlugins = emblaPlugins.filter((e) => e !== undefined);

    const [emblaRef] = useEmblaCarousel(emblaOptions, emblaPlugins);

    const renderChildren = () => {
        return Children.map(children, (child: any) => {
            return cloneElement(child, {
                className: slideClassName ?? 'min-w-0 flex-1'
            });
        });
    };

    return (
        <div className={classNames(sliderWrapperClassNames, 'embla overflow-hidden')}>
            <div className={classNames(sliderViewportClassNames, 'embla__viewport')} ref={emblaRef}>
                <div className={classNames(sliderInnerWrapperClassNames, 'embla__container')}>{renderChildren()}</div>
            </div>
        </div>
    );
};

export default Slider;
