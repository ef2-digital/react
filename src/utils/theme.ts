import { Attribute, Variant } from '../theme/types';

export const classNames = (...args: (string | { [key: string]: boolean } | undefined)[]): string => {
    return args.reduce<string>((a: string, c) => {
        if (!c) {
            return a;
        }

        // prettier-ignore
        const cn =
            typeof c === 'string'
                ? c
                : classNames(...Object.entries(c).filter(([_, value]) => value).map(([key]) => key));

        if (Boolean(cn.length)) {
            return Boolean(a.length) ? `${a} ${cn}` : cn;
        }

        return a;
    }, '');
};

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
