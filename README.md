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
yarn add -D tailwindcss postcss autoprefixer @headlessui/tailwindcss
npx tailwindcss init -p
```
```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './theme.ts',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './node_modules/@ef2/react/lib/**/*.js'
    ],
    plugins: [
        require('@headlessui/tailwindcss')
    ]
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
export type Variant = { DEFAULT: string; primary: string; [key: string]: string };

export interface Component {
    variant: Attribute<Variant>;
}

export interface Button extends Component {
    size: Attribute;
}

export interface Theme {
    button: Button;
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
