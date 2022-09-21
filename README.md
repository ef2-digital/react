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
```js
// components/layout/DefaultLayout.js

import { ThemeProvider } from "@ef2-digital/react";

const DefaultLayout = ({ children }) => {
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