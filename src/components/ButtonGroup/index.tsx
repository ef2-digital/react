import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export interface ButtonGroupProps {
    className?: string;
    overflowHidden?: boolean;
}

const ButtonGroup = ({ children, className }: PropsWithChildren<ButtonGroupProps>) => {
    return (
        <div
            className={classNames(
                'isolate inline-flex rounded-md shadow-sm [&>*:not(:first-child)]:border-l-black/25 [&>*:not(:first-child)]:-ml-px overflow-hidden [&>*]:rounded-none',
                className
            )}
        >
            {children}
        </div>
    );
};

export default ButtonGroup;
