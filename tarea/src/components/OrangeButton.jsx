import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeProvider";

const OrangeButton = ({ text, onPress }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.secondary,
      width: 320,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 26,
    },
    text: {
      color: theme.background,
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OrangeButton;
