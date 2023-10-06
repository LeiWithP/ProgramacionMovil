import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "./ThemeProvider";
import Icon from "react-native-vector-icons/FontAwesome";

const IconButton = ({ iconName, text, onPress }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.secondary,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: 108,
      height: 90,
    },
    text: {
      color: theme.colors.text,
      fontSize: 16,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={iconName} size={20} color={theme.colors.text} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;
