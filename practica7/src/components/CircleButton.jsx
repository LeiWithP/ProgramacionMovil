import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const CircleButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.iconContainer}></View>
    </TouchableOpacity>
  );
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
  iconContainer: {
    marginBottom: 8,
  },
});

export default CircleButton;
