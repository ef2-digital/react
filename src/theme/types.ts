import { ResourceKey } from 'i18next';
import { ElementType } from 'react';

export type Attribute<T = string> = { DEFAULT: T; [key: string]: T };
export type Variant = { BASE: string; primary: string; [key: string]: string };

export interface Component {
    VARIANT: Attribute<Variant>;
}

export interface Icon {
    [key: string]: ElementType;
}

export interface Button extends Component {
    size: Attribute;
}

export interface Toggle extends Component {
    slider: Attribute<Variant>;
    label: Attribute<Variant>;
}

export interface Copyright extends Component {}
export interface FormControl extends Component {}

export interface Modal extends Component {
    overlay: Attribute;
}

export interface Rating extends Component {
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
    formControl: FormControl
}

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

// GraphQL
export type Maybe<T> = T | null;
