# @ef2-digital/react

## Installation

Install the plugin from yarn:

```sh
yarn add @ef2-digital/react
```

This library is build with TypeScript, so type-definitions are shipped out-of-the-box.

## Components
Documentation: [Storybook](https://ef2-digital.github.io/react).

## Configuration

## Quick start
Here's a quick example to get you started. Add `ThemeProvider` to the top level of your app.

Tailwind:

```sh
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './node_modules/@ef2-digital/react/lib/**/*.js'
    ],
}
```
> :exclamation: The library defaults to two colors: "primary" and "secondary". Make sure to add them with [Tailwind shades](https://www.tailwindshades.com/) to your tailwind config.

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        colors: {
            white: '#ffffff',
            transparent: 'transparent',
            primary: {
                DEFAULT: '#FF7A00',
                50: '#FFAA5C',
                100: '#FFA552',
                200: '#FF9A3D',
                300: '#FF8F29',
                400: '#FF8514',
                500: '#FF7A00',
                600: '#EB7000',
                700: '#D66600',
                800: '#C25D00',
                900: '#AD5300'
            },
            secondary: {
                DEFAULT: '#00212D',
                50: '#006489',
                100: '#005D7F',
                200: '#004E6A',
                300: '#003F56',
                400: '#003041',
                500: '#00212D',
                600: '#001219',
                700: '#000304',
                800: '#000000',
                900: '#000000'
            }
        },
    },
}
```

React:
```js
// App.js

import { ThemeProvider, Button } from "@ef2-digital/react";

const App = ({ children }) => {
    return (
        <ThemeProvider>
            <Button>Button</Button>
        </ThemeProvider>
    );
};
```

Next.js:
```tsx
// components/layout/DefaultLayout.tsx

import { ThemeProvider } from "@ef2-digital/react";

const DefaultLayout = ({ children }: PropsWithChildren) => {
    return (
        <ThemeProvider>
            <main id="main">
                {children}
            </main>
        </ThemeProvider>
    );
};
```

## Theming
By default all EF2 components lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

### Theme structure
```typescript
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
    // ... other components.
}
```

### Customize Theme
```ts
// theme.ts
// 1. Create a 'theme.ts' file.
import type { PartialTheme } from '@ef2-digital/react';

// 2. Define your theme.
const theme: PartialTheme = {
    button: {
        variant: {
            DEFAULT: { primary: 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500' }
        }
    }
}

export default theme;
```
```tsx
// components/layout/DefaultLayout.tsx

import { ThemeProvider } from "@ef2-digital/react";
import theme from 'theme' // your custom theme :D.

// 3. Pass the new theme to `ThemeProvider`
const DefaultLayout = ({ children }: PropsWithChildren) => {
    return (
        <ThemeProvider theme={theme}>
            <main id="main">
                {children}
            </main>
        </ThemeProvider>
    );
};
```
