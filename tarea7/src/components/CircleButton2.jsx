import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const CircleButton2 = ({ children }) => {
  return <TouchableOpacity style={styles.button}>{children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#d96e43",
    opacity: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CircleButton2;
