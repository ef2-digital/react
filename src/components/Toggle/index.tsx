import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import { forwardRef } from 'react';

export interface ToggleProps {
    open: boolean;
    className?: string;
}

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(({ open, className }, ref) => {
    return (
        <Disclosure.Button
            ref={ref}
            className={classNames(
                'relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded bg-secondary hover:bg-secondary-700 hover:shadow-md focus:border-secondary-700 focus:bg-secondary focus:shadow-md focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-secondary',
                className
            )}
        >
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
