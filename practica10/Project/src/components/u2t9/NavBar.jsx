import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { THEME } from "../../theme/styles";
import Numpad from "../../components/u2t9/Numpad";
import { useAppContext } from "../../hooks/useAppContext";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const NavBar = ({ left, text, right, onPress1, onPress2 }) => {
  const { theme, darkMode } = useAppContext();
  navigation = useNavigation();

  return (
    <View
      style={[styles.navBar, darkMode ? theme.dark.primary : theme.light.primary ,]}
    >
      <TouchableOpacity onPress={onPress1}>{left}</TouchableOpacity>
      <Text
        style={[styles.text, { color: darkMode ? theme.dark.text : theme.light.text }]}
      >
        {text}
      </Text>
      <TouchableOpacity onPress={onPress2}>{right}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "auto",
    width: "100%",
  },
  text: {
    fontSize: 18,
  },
});

export default NavBar;
