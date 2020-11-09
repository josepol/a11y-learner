import React from 'react';
import './App.css';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { regularTheme } from './Theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={regularTheme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
