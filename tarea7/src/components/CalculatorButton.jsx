import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CalculatorButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
    //   onPress={() => onPress(label)}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderWidth: 2,
    borderColor:  "rgba(0, 0, 0, 0.1)",
  },
  label: {
    fontSize: 24,
    color: "black",
  },
});

export default CalculatorButton;
