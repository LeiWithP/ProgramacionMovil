import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function GoButton(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      // title={props.title}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 60,
    marginVertical: 10
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default GoButton;
