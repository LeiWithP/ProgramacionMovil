import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useTheme } from "./ThemeProvider";
import CircularIcons from "./CircularIcons";

const Card = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.text,
      borderRadius: 32,
      alignItems: "center",
      justifyContent: "center",
      width: 248,
      height: 150,
      marginRight: 10,
    },
    text: {
      color: theme.colors.background,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "left",
      width: 190,
    },
    lightText: {
      color: theme.colors.background,
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: 210 }}>
        <CircularIcons />
        <Text style={styles.lightText}>**** 4934</Text>
      </View>
      <Text style={styles.text}>$13,397.23</Text>
    </View>
  );
};

export default Card;
