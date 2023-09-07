import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const CircleButton3 = ({ children }) => {
  return <TouchableOpacity style={styles.button}>{children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CircleButton3;
