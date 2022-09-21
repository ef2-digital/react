import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export interface ButtonGroupProps {
    className?: string;
}

const ButtonGroup = ({ children, className }: PropsWithChildren<ButtonGroupProps>) => {
    return (
        <div
            className={classNames(
                'isolate inline-flex rounded-md shadow-sm [&>*:not(:first-child)]:border-l-indigo-400 [&>*:not(:first-child)]:-ml-px overflow-hidden [&>*]:rounded-none',
                className
            )}
        >
            {children}
        </div>
    );
};

export default ButtonGroup;
