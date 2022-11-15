import {ReactNode, useCallback, useEffect, useState} from "react";
import { throttle } from 'lodash-es';

export interface ScrollHeaderProps {
    children: ({ top }: { top: boolean }) => ReactNode;
}

const ScrollHeader = ({ children }: ScrollHeaderProps) => {
    const [top, setTop] = useState<boolean>(true);

    // Methods.
    const handleOnScroll = (_: Event) => {
        setTop(window.scrollY === 0);
    }

    const handleOnScrollThrottled = useCallback(throttle(handleOnScroll, 100), [handleOnScroll]);

    // Life cycle.
    useEffect(() => {
        window.addEventListener('scroll', handleOnScrollThrottled);
        return () => window.removeEventListener('scroll', handleOnScrollThrottled);
    }, []);

    return children({ top });
}

export default ScrollHeader;