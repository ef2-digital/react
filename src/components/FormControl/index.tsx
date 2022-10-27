import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';
import { getAttributeVariantClasses } from '../../utils/theme';
import { useThemeContext } from '../ThemeProvider';

export interface FormControlProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: string;
    color?: string;
    className?: string;
    type?: 'text';
    startIcon?: string;
    endIcon?: string;
}

const FormControl = ({ variant, color, className, type = 'text', ...props }: FormControlProps) => {
    const {
        theme: { formControl }
    } = useThemeContext();

    return (
        <div className="relative rounded-md shadow-sm">
            <input
                {...props}
                type={type}
                className={classNames(getAttributeVariantClasses(formControl.variant, variant, color), className)}
            />
        </div>
    );
};

export default FormControl;
