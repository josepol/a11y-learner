import React from "react";
import { ThemeProvider } from 'styled-components';
import { regularTheme } from 'Theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={regularTheme}>
      <Story style={{ margin: '3em' }} />
    </ThemeProvider>
  ),
];
