import { ReactElement, useCallback, useEffect, useState } from 'react';
import { throttle } from '../../utils/helpers';

export interface ScrollHeaderProps {
    children: ({ top }: { top: boolean }) => ReactElement;
}

const ScrollHeader = ({ children }: ScrollHeaderProps) => {
    const [top, setTop] = useState<boolean>(true);

    // Methods.
    const handleOnScroll = () => {
        setTop(window.scrollY === 0);
    };

    const handleOnScrollThrottled = useCallback(throttle(handleOnScroll, 100), [handleOnScroll]);

    // Life cycle.
    useEffect(() => {
        handleOnScroll();
        window.addEventListener('scroll', handleOnScrollThrottled);
        return () => window.removeEventListener('scroll', handleOnScrollThrottled);
    }, []);

    return children({ top });
};

export default ScrollHeader;
