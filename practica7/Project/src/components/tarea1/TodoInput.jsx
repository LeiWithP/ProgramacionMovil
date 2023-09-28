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
import CustomButton from "./CustomButton";
import { THEME } from "../../theme/styles";

const TodoInput = ({value, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 20,
        flex: 1,
        borderRadius: 5,
        height: 40,
        backgroundColor: THEME.COLORS.SECONDARY,
        borderColor: "transparent",
        color: "white",
    },
  });

export default TodoInput;
