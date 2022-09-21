import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';
import { useThemeContext } from '../ThemeProvider';
import { getAttributeClasses, getAttributeVariantClasses } from '../../utils/theme';

type Attributes = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends Attributes {
    as?: ElementType;
    variant?: string;
    color?: string;
    children: string;
    size?: string;
    rounded?: boolean;
}

const Button = ({ as: Tag = 'button', children, variant, color = 'primary', size, rounded, ...props }: ButtonProps) => {
    const {
        theme: { button }
    } = useThemeContext();

    return (
        <Tag
            className={classNames(getAttributeVariantClasses(button.variant, variant, color), getAttributeClasses(button.size, size), {
                'rounded-full': rounded
            })}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Button;
