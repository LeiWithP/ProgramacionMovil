import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const SwitchButton = () => {
  return (
    <TouchableOpacity style={styles.switchButton} activeOpacity={0.7}>
      <View style={[styles.circle]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchButton: {
    width: 60,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    paddingHorizontal: 4,
    backgroundColor: "#ccc",
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "white",
  },
});

export default SwitchButton;
