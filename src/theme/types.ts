export type Attribute<T = string> = { DEFAULT: T; [key: string]: T };
export type Variant = { BASE: string; primary: string; [key: string]: string };

export interface Button {
    variant: Attribute<Variant>;
    size: Attribute;
}

export interface Toggle {
    variant: Attribute<Variant>;
}

export interface Theme {
    button: Button;
    toggle: Toggle;
}

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
