import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode
    ? {
        background: '#000',
        text: '#fff',
        primary: '#499c8e',
        secondary: '#cc7b10',
      }
    : {
        background: '#fff',
        text: '#000',
        primary: '#499c8e',
        secondary: '#cc7b10',
      };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
