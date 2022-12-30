import { PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';
import { DeepPartial, Theme } from '../../theme/types';
import defaultTheme from '../../theme';
import { twMerge } from 'tailwind-merge';
import { isString, mergeWith } from '../../utils/helpers';

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

const mergeTheme = (defaultTheme: Theme, theme?: PartialTheme): Theme => {
    if (!theme) {
        return defaultTheme;
    }

    return mergeWith<Theme, PartialTheme>(defaultTheme, theme, (objValue, srcValue) => {
        if (isString(objValue) && isString(srcValue)) {
            return twMerge(objValue, srcValue);
        }
    });
};

const ThemeProvider = ({ theme: newTheme, children }: PropsWithChildren<ThemeProviderProps>) => {
    const theme = mergeTheme(defaultTheme, newTheme);

    return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
