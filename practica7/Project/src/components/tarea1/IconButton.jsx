import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons"; // Import icons from Expo Icons

const IconButton = ({ iconName, iconSize, iconColor, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Entypo name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;