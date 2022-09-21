export type Attribute = { DEFAULT: string; [key: string]: string };

export interface Button {
    variant: {
        DEFAULT: { BASE: string; primary: string; [key: string]: string };
        [key: string]: { BASE: string; primary: string; [key: string]: string };
    };
    size: Attribute;
}

export interface Theme {
    button: Button;
}

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
