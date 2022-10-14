import { PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';
import { DeepPartial, Theme } from '../../theme/types';
import defaultTheme from '../../theme';
import { cloneDeep, isString, mergeWith } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import i18next, { i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({ fallbackLng: 'en', defaultNS: 'common', resources: defaultTheme.localization });

// Context.
interface ThemeContextValue {
    theme: Theme; 
    i18n: i18n;
}

const ThemeContext = createContext<ThemeContextValue>({
    theme: defaultTheme,
    i18n: i18next
});

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

export type PartialTheme = DeepPartial<Theme>;

// Provider.
export interface ThemeProviderProps {
    theme?: PartialTheme;
    i18n: i18n;
}

const mergeTheme = (defaultTheme: Theme, theme?: PartialTheme): Theme => {
    if (!theme) {
        return defaultTheme;
    }

    return mergeWith<Theme, PartialTheme>(cloneDeep(defaultTheme), theme, (objValue, srcValue) => {
        if (isString(objValue) && isString(srcValue)) {
            return twMerge(objValue, srcValue);
        }
    });
};

const ThemeProvider = ({ theme: initialTheme, i18n, children }: PropsWithChildren<ThemeProviderProps>) => {
    const theme = mergeTheme(defaultTheme, initialTheme);

    return <ThemeContext.Provider value={{ theme, i18n }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
