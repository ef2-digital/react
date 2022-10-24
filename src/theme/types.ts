import { ResourceKey } from 'i18next';
import { ElementType } from 'react';

export type Attribute<T = string> = { DEFAULT: T; [key: string]: T };
export type Variant = { BASE: string; primary: string; [key: string]: string };

export interface Button {
    variant: Attribute<Variant>;
    size: Attribute;
}

export interface Icon {
    [key: string]: ElementType;
}

export interface Toggle {
    variant: Attribute<Variant>;
}

export interface Copyright {
    variant: Attribute<Variant>;
}

export interface Modal {
    overlay: Attribute;
    variant: Attribute<Variant>;
}

export interface Rating {
    active: Attribute<Variant>;
    empty: Attribute<Variant>;
}

export interface Resource {
    nl: ResourceLanguage;
    en: ResourceLanguage;
    [language: string]: ResourceLanguage;
}

export interface ResourceLanguage {
    input: {
        rating: {
            rating: string;
            star_one: string;
            star_other: string;
        };
    };
    common: ResourceKey;
    [namespace: string]: ResourceKey;
}

export interface Theme {
    button: Button;
    toggle: Toggle;
    rating: Rating;
    icon: Icon;
    localization: Resource;
    copyright: Copyright;
    modal: Modal;
}

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

// GraphQL
export type Maybe<T> = T | null;
