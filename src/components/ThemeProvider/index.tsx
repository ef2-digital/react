import { isValidElement, type PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';
import { Component, DeepPartial, Theme } from '../../theme/types';
import defaultTheme from '../../theme';
import { twMerge } from 'tailwind-merge';

// Context.
interface ThemeContextValue {
    theme: Theme;
}

const ThemeContext = createContext<ThemeContextValue>({
    theme: defaultTheme
});

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

export type PartialTheme = DeepPartial<Theme>;

// Provider.
export interface ThemeProviderProps {
    theme?: PartialTheme;
}

type ThemeAttribute = { [key: string]: ThemeAttribute } | string | Component;

// source is part of the default theme. Therefore always defined.
const mergeThemes = (source: ThemeAttribute, attribute?: ThemeAttribute): ThemeAttribute => {
    // If there is nothing to override.
    if (!attribute) {
        return source;
    }

    if (typeof source === 'object' && typeof attribute === 'object') {
        return Object.entries(source).reduce((a: { [key: string]: ThemeAttribute }, [key, value]) => {
            if (attribute.hasOwnProperty(key)) {
                a[key] = mergeThemes(value, attribute[key]);
            }

            return a;
        }, {});
    }

    // Attribute should override source where possible.
    if (typeof source === 'string' && typeof attribute === 'string') {
        return twMerge(source, attribute);
    }

    // Fallback.
    return source;
};

// const mergeThemesWith = (defaultTheme: PartialTheme, theme: Theme, customizer: (objValue: string, srcValue: string) => string) => {};

const mergeTheme = (defaultTheme: Theme, newTheme?: PartialTheme): Theme => {
    if (!newTheme) {
        return defaultTheme;
    }

    const theme = Object.entries(defaultTheme).reduce((a: Theme, [key, value]) => {
        if (typeof value === 'object' && isValidElement(value)) {
            a[key] = value;
        }

        if (newTheme.hasOwnProperty(key)) {
            a[key] = mergeThemes(value as Component, newTheme[key]) as Component;
        }

        a[key] = value;

        return a;
    }, {} as Theme);

    return theme;
};

const ThemeProvider = ({ theme: initialTheme, children }: PropsWithChildren<ThemeProviderProps>) => {
    const theme = mergeTheme(defaultTheme, initialTheme);

    return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
