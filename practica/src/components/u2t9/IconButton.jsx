import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { THEME } from "../../theme/styles";

const IconButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.iconButton} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: THEME.COLORS.GRAY.DIM,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
