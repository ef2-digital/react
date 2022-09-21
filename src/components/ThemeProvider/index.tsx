import { PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';
import { DeepPartial, Theme } from '../../theme/types';
import defaultTheme from '../../theme';
import { cloneDeep, isString, mergeWith } from 'lodash-es';
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

// Provider.
export interface ThemeProviderProps {
    theme?: DeepPartial<Theme>;
}

const mergeTheme = (defaultTheme: Theme, theme?: DeepPartial<Theme>): Theme => {
    if (!theme) {
        return defaultTheme;
    }

    return mergeWith<Theme, DeepPartial<Theme>>(cloneDeep(defaultTheme), theme, (objValue, srcValue) => {
        if (isString(objValue) && isString(srcValue)) {
            return twMerge(objValue, srcValue);
        }
    });
};

const ThemeProvider = ({ theme: initialTheme, children }: PropsWithChildren<ThemeProviderProps>) => {
    const theme = mergeTheme(defaultTheme, initialTheme);

    return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
