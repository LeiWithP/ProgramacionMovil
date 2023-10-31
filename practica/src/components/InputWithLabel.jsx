import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { THEME } from "../theme/styles";

const InputWithLabel = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: THEME.COLORS.GREY,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

export default InputWithLabel;
