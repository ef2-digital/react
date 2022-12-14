import { PropsWithChildren } from 'react';
import { classNames } from '../../utils/theme';

export interface ContainerProps {
    className?: string;
}

const Container = ({ children, className }: PropsWithChildren<ContainerProps>) => {
    return <div className={classNames('container mx-auto', className)}>{children}</div>;
};

export default Container;
