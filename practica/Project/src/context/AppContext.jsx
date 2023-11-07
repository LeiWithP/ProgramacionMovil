import { createContext, useEffect, useState } from "react";
import { THEME } from "../theme/styles";
import { useColorScheme } from "react-native";

const styles = {
  light: {
    primary: THEME.COLORS.WHITE,
    secondary: THEME.COLORS.BLUE.PLATINUM,
    title: THEME.COLORS.RED,
    icon: THEME.COLORS.BLACK.NIGHT,
    addButton: THEME.COLORS.BLUE.NAVY,
    addButtonText: THEME.COLORS.WHITE,
    card: THEME.COLORS.BEIGE,
    border: THEME.COLORS.BLUE.NAVY,
  },
  dark: {
    primary: THEME.COLORS.BLACK.NIGHT,
    secondary: THEME.COLORS.BLACK.EERIE,
    text: THEME.COLORS.WHITE, 
    icon: THEME.COLORS.WHITE,
    addButton: THEME.COLORS.MINDARO,
    addButtonText: THEME.COLORS.BLACK.NIGHT,
    card: THEME.COLORS.WHITE,
    border: THEME.COLORS.RED,
  },
};

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(styles);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("darkMode", darkMode);
  }

  const values = {
    darkMode: darkMode,
    handleDarkMode: handleDarkMode,
    theme: theme,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
