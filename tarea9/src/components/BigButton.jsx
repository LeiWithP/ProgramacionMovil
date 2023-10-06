import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "./ThemeProvider";

const BigButton = ({ text, onPress }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 35,
      alignItems: "center",
      justifyContent: "center",
      width: 346,
      height: 70,
    },
    buttonText: {
      color: 'black',
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BigButton;
