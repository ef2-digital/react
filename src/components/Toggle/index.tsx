import { Switch } from '@headlessui/react';
import { getAttributeVariantClasses } from '../../utils/theme';
import { useThemeContext } from '../ThemeProvider';

export interface ToggleProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    screenReader?: string;
    color?: string;
    variant?: string;
}

const Toggle = ({ checked, onChange, label, variant, color, screenReader }: ToggleProps) => {
    const {
        theme: { toggle }
    } = useThemeContext();

    return (
        <Switch.Group>
            <div className="flex items-center">
                {label && <Switch.Label className={getAttributeVariantClasses(toggle.label, variant, color)}>{label}</Switch.Label>}
                <Switch className={getAttributeVariantClasses(toggle.VARIANT, variant, color)} checked={checked} onChange={onChange}>
                    {screenReader && <span className="sr-only">{screenReader}</span>}
                    <span className={getAttributeVariantClasses(toggle.slider, variant, color)} />
                </Switch>
            </div>
        </Switch.Group>
    );
};

export default Toggle;
