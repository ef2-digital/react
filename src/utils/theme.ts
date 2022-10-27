import classNames from 'classnames';
import { Attribute, Variant } from '../theme/types';

export const getAttributeClasses = <T extends string | Variant = string>(attribute: Attribute<T>, variant?: string): T => {
    if (variant && attribute.hasOwnProperty(variant)) {
        return attribute[variant];
    }

    return attribute.DEFAULT;
};

export const getVariantClasses = (variant: Variant, color?: string): string => {
    if (color && variant.hasOwnProperty(color)) {
        return classNames(variant.DEFAULT, variant[color]);
    }

    return classNames(variant.DEFAULT, variant.primary);
};

export const getAttributeVariantClasses = (attribute: Attribute<Variant>, variant?: string, color?: string): string => {
    return getVariantClasses(getAttributeClasses(attribute, variant), color);
};
