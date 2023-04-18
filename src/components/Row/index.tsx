import { forwardRef, PropsWithChildren } from 'react';
import { classNames, getAttributeClasses } from '../../utils/theme';
import { useThemeContext } from '../ThemeProvider';

export interface RowProps extends PropsWithChildren {
    className?: string;
}

const Row = forwardRef<HTMLDivElement, RowProps>(({ children, className }, ref) => {
    const {
        theme: { row }
    } = useThemeContext();

    return (
        <div ref={ref} className={classNames(getAttributeClasses(row), className)}>
            {children}
        </div>
    );
});

// Row.displayName = 'Row';

export default Row;
