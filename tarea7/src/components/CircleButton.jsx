import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const CircleButton = ({ children }) => {
  return <TouchableOpacity style={styles.button}>{children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#ffd28a",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CircleButton;
