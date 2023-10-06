import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useTheme } from "./ThemeProvider";

const CardPlus = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      borderRadius: 32,
      alignItems: "center",
      justifyContent: "center",
      width: 72,
      height: 150,
      marginRight: 10,
    },
    text: {
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>+</Text>
    </View>
  );
};

export default CardPlus;
