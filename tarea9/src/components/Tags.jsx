import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useTheme } from "./ThemeProvider";

const Tags = ({ text }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.text,
      borderWidth: 1,
      borderRadius: 32,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 12,
      height: 40,
    },
    text: {
      color: theme.colors.text,
      fontSize: 14,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Tags;
