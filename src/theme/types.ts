import { ElementType, ReactElement } from 'react';

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

export interface Theme {
    button: Button;
    toggle: Toggle;
    icon: Icon;
}

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
