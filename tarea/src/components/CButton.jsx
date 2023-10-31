import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CButton({ text, buttonPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={buttonPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan",
    height: 70,
    width: 70,
    borderRadius: 25,
    margin: 8,
  },
  buttonText: {
    fontSize: 40,
  },
});
