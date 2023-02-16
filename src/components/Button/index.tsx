import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, forwardRef, PropsWithChildren } from 'react';
import { useThemeContext } from '../ThemeProvider';
import Icon from '../Icon';
import { classNames, getAttributeClasses, getAttributeVariantClasses } from '../../utils/theme';

type Attributes = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends Attributes {
    as?: ElementType;
    variant?: string;
    color?: string;
    size?: string;
    rounded?: boolean;
    startIcon?: string;
    endIcon?: string;
}

const Button = forwardRef<HTMLElement, PropsWithChildren<ButtonProps>>(
    ({ as: Tag = 'button', children, variant, color = 'primary', size, rounded, className, startIcon, endIcon, ...props }, ref) => {
        const {
            theme: { button }
        } = useThemeContext();

        return (
            <Tag
                ref={ref}
                className={classNames(
                    getAttributeVariantClasses(button.variant, variant, color),
                    getAttributeClasses(button.size, size),
                    {
                        'rounded-full': rounded
                    },
                    className
                )}
                {...props}
            >
                {startIcon && <Icon className="mr-2" name={startIcon} />}
                {children}
                {endIcon && <Icon className="ml-2" name={endIcon} />}
            </Tag>
        );
    }
);

export default Button;
