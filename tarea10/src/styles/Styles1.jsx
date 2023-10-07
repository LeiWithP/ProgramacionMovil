import { StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeProvider";

const getStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: theme.background,
    },
    title: {
      color: theme.text,
      fontSize: 34,
      fontWeight: "600",
      textAlign: "center",
    },
    leftTitle: {
      color: theme.text,
      fontSize: 34,
      width: 320,
      fontWeight: "600",
      textAlign: "left",
    },
    text: {
      color: theme.text,
      fontSize: 18,
      fontWeight: "400",
      textAlign: "center",
    },
    linkText: {
      color: theme.secondary,
      fontSize: 18,
      fontWeight: "400",
      textAlign: "center",
      textDecorationLine: "underline",
    },
    button: {
      backgroundColor: theme.primary,
      width: 340,
      height: 70,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    buttonText: {
      color: theme.background,
      fontSize: 18,
      fontWeight: "600",
    },
  });
};

export default getStyles;
