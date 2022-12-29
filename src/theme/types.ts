import { ElementType } from 'react';

export type Attribute<T = string> = { DEFAULT: T; [key: string]: T };
export type Variant = { DEFAULT: string; primary: string; [key: string]: string };

export interface Component {
    variant: Attribute<Variant>;
    [key: string]: Attribute<string | Variant>;
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

export interface Theme {
    button: Button;
    toggle: Toggle;
    rating: Rating;
    icon: Icon;
    copyright: Copyright;
    modal: Modal;
    formControl: FormControl;
    [key: string]: Component | { [key: string]: ElementType };
}

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

// GraphQL
export type Maybe<T> = T | null;
