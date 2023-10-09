import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeProvider";

const Tag = ({ text, onPress }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.secondary,
      opacity: 0.7,
      marginRight: 20,
      paddingVertical: 10,
      paddingHorizontal: 18,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 14,
    },
    text: {
      color: theme.background,
      fontSize: 18,
      fontWeight: "600",
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Tag;
