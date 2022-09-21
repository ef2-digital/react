import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';
import { useThemeContext } from '../ThemeProvider';

type Attributes = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends Attributes {
    as?: ElementType;
    variant?: string;
    color?: string;
    children: string;
    size?: string;
    rounded?: boolean;
}

const getTwClasses = <T extends object | string>(attribute: { DEFAULT: T; [key: string]: T }, key?: string): T => {
    return key ? attribute[key] : attribute.DEFAULT;
};

const Button = ({ as: Tag = 'button', children, variant, color = 'primary', size, rounded, ...props }: ButtonProps) => {
    const {
        theme: { button }
    } = useThemeContext();

    const btnVariant = getTwClasses<{ BASE: string; [key: string]: string }>(button.variant, variant);
    const btnColor = color ? btnVariant[color] : btnVariant.primary;

    return (
        <Tag
            className={classNames(btnVariant.BASE, btnColor, getTwClasses<string>(button.size, size), { 'rounded-full': rounded })}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Button;
