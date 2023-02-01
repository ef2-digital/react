import { ReactElement, useCallback, useEffect, useState } from 'react';
import { throttle } from '../../utils/helpers';

export interface ScrollHeaderProps {
    children: ({ top, offset }: { top: boolean; offset: number }) => ReactElement;
}

const ScrollHeader = ({ children }: ScrollHeaderProps) => {
    const [top, setTop] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);

    // Methods.
    const handleOnScroll = () => {
        setTop(window.scrollY === 0);
        setOffset(window.scrollY);
    };

    const handleOnScrollThrottled = useCallback(throttle(handleOnScroll, 100), [handleOnScroll]);

    // Life cycle.
    useEffect(() => {
        handleOnScroll();
        window.addEventListener('scroll', handleOnScrollThrottled);
        return () => window.removeEventListener('scroll', handleOnScrollThrottled);
    }, []);

    return children({ top, offset });
};

export default ScrollHeader;
