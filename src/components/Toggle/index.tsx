import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { getAttributeVariantClasses } from '../../utils/theme';
import { useThemeContext } from '../ThemeProvider';

export interface ToggleProps {
    open: boolean;
    variant?: string;
    color?: string;
    className?: string;
}

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(({ open, variant, color, className }, ref) => {
    const {
        theme: { toggle }
    } = useThemeContext();

    return (
        <Disclosure.Button ref={ref} className={classNames(getAttributeVariantClasses(toggle.variant, variant, color), className)}>
            <span className="sr-only">Open hoofdmenu</span>
            <span
                aria-hidden
                className={classNames('absolute h-0.5 w-5 transform bg-white transition duration-300', {
                    'rotate-45': open,
                    '-translate-y-1.5': !open
                })}
            />
            <span
                aria-hidden
                className={classNames('absolute h-0.5 w-5 transform bg-white transition duration-300', {
                    'opacity-0': open
                })}
            />
            <span
                aria-hidden
                className={classNames('absolute h-0.5 w-5 transform bg-white transition duration-300', {
                    '-rotate-45': open,
                    'translate-y-1.5': !open
                })}
            />
        </Disclosure.Button>
    );
});

Toggle.displayName = 'Toggle';

export default Toggle;
