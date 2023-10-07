import React from 'react';
import Navigation from './src/components/Navigation';
import { ThemeProvider } from './src/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
