import React from 'react';
import './Normalize.css';
import './App.css';
import { Router } from 'Router';
import { ThemeProvider } from 'styled-components';
import { regularTheme } from 'Theme';

function App() {
  return (
    <ThemeProvider theme={regularTheme} data-testid="theme-provider">
      <Router />
    </ThemeProvider>
  );
}

export default App;
