export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, delay: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return function (...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(this, args), delay);
    };
};

export const throttle = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, delay: number) => {
    let inThrottle: boolean;
    let lastResult: ReturnType<T>;

    return function (this: any): ReturnType<T> {
        const args = arguments;
        const context = this;

        if (!inThrottle) {
            inThrottle = true;

            setTimeout(() => (inThrottle = false), delay);
            lastResult = callback.apply(context, args);
        }

        return lastResult;
    };
};
