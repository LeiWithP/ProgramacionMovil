import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";

const CustomButton = ({ text, onPress, light }) => {
  return (
    <TouchableOpacity
      style={[styles.container, light ? styles.white : "auto"]}
      onPress={onPress}
    >
      <Text style={{ color: light ? "white" : "black" }}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  white: {
    color: "white",
    borderColor: "white",
  },
});

export default CustomButton;
