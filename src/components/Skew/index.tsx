import classNames from 'classnames';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, forwardRef, PropsWithChildren } from 'react';

type Attributes = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;

export interface SkewProps extends PropsWithChildren, Attributes {
    as?: ElementType;
    skew?: number;
    duration?: number;
    className?: string;
    inView: boolean;
    parentClassName?: string;
}

const Skew = forwardRef<HTMLDivElement, SkewProps>(
    ({ as: Tag = 'span', children, inView, className, parentClassName: margin, ...props }, ref) => {
        return (
            <div ref={ref} className={classNames('block overflow-hidden', margin)}>
                <Tag
                    className={classNames(
                        '!m-0 block origin-top-left transition-all duration-500 motion-reduce:transition-none',
                        { 'translate-y-full skew-y-6': !inView, 'translate-y-0 skew-y-0': inView },
                        className
                    )}
                    {...props}
                >
                    {children}
                </Tag>
            </div>
        );
    }
);

Skew.displayName = 'Skew';

export default Skew;
