'use client';

import { PropsWithChildren, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { DeepPartial, Theme } from '../../theme/types';
import defaultTheme from '../../theme';
import { cloneDeep, isString, mergeWith } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import i18next, { i18n } from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// Context.
interface ThemeContextValue {
    theme: Theme;
    lng?: string;
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
    i18n?: i18n;
    lng?: string;
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

const ThemeProvider = ({ theme: initialTheme, lng, i18n: initialI18n, children }: PropsWithChildren<ThemeProviderProps>) => {
    const theme = mergeTheme(defaultTheme, initialTheme);
    const i18n = initialI18n ? initialI18n : i18next;

    i18next.use(Backend).use(initReactI18next).init({ fallbackLng: 'nl', lng, defaultNS: 'common', resources: defaultTheme.localization });

    return (
        <I18nextProvider i18n={i18n}>
            <ThemeContext.Provider value={{ theme, lng }}>{children}</ThemeContext.Provider>
        </I18nextProvider>
    );
};

export default ThemeProvider;
