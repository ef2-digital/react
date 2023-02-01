export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, delay: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return function (...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(this, args), delay);
    };
};

export const throttle = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, delay: number) => {
    let timeout: NodeJS.Timer | number | null = null;
    let callbackArgs: IArguments | null = null;
    const context = this;

    const later = () => {
        callback.apply(context, callbackArgs);
        timeout = null;
    };

    return function () {
        if (!timeout) {
            callbackArgs = arguments;
            timeout = setTimeout(later, delay);
        }
    };
};

export const isString = <T>(string: T): boolean => {
    return typeof string === 'string';
};

export const isObject = <T>(object: T): boolean => {
    return typeof object === 'object';
};

export const mergeWith = <O extends { [key: string]: any }, S extends { [key: string]: any }>(
    object: O,
    source: S,
    customizer: (objValue: any, srcValue: any) => any | undefined
): O & S => {
    if (object === (source as unknown as O)) {
        return object as O & S;
    }

    const keys = Array.from(new Set(Object.keys(object).concat(Object.keys(source))));

    return keys.reduce<O & S>((a, key: keyof (S | O)) => {
        if (object.hasOwnProperty(key) && !source.hasOwnProperty(key)) {
            a[key] = object[key];
            return a;
        }

        if (source.hasOwnProperty(key) && !object.hasOwnProperty(key)) {
            a[key] = source[key];
            return a;
        }

        const objValue = object[key];
        const srcValue = source[key];
        const newValue = customizer(objValue, srcValue);

        if (typeof newValue !== 'undefined') {
            a[key] = newValue;
            return a;
        }

        if (isObject(objValue) && isObject(srcValue)) {
            a[key] = mergeWith(objValue, srcValue, customizer);
            return a;
        }

        if (Array.isArray(objValue) && Array.isArray(srcValue)) {
            a[key] = Array.from(new Set(objValue.concat(srcValue))) as O[keyof O & keyof S] & S[keyof O & keyof S];
            return a;
        }

        return a;
    }, {} as O & S);
};
