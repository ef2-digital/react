import classNames from 'classnames';
import { useThemeContext } from '../ThemeProvider';

export interface IconProps {
    className?: string;
    label?: string;
    name?: string;
}

const Icon = ({ className, name = 'cooking' }: IconProps) => {
    const {
        theme: { icon }
    } = useThemeContext();

    // Render.
    const Component = icon[name] ?? icon['cooking'];

    return <Component aria-hidden className={classNames(className)} width={24} height={24} viewBox="0 0 48 48" />;
};

export default Icon;
