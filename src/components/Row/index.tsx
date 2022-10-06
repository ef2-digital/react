import classNames from 'classnames';
import { forwardRef, PropsWithChildren } from 'react';

export interface RowProps extends PropsWithChildren {
    className?: string;
}

const Row = forwardRef<HTMLDivElement, RowProps>(({ children, className }, ref) => {
    return (
        <div ref={ref} className={classNames('grid grid-cols-4 gap-x-4 auto-rows-auto md:grid-cols-12', className)}>
            {children}
        </div>
    );
});

Row.displayName = 'Row';

export default Row;
