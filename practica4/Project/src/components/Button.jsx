import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { THEME } from "../theme/styles";

const Button = ({ isPrimary, text, secondText, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
      ]}
      onPress={onPress}
    >
      {secondText ? (
        <Text
          style={[
            isPrimary ? styles.primaryButtonText : styles.secondaryButtonText,
          ]}
        >
          <Text>{text}</Text>
          <Text style={{ color: THEME.COLORS.ORANGE, fontWeight: "bold" }}>
            {" "}
            {secondText}
          </Text>
        </Text>
      ) : (
        <Text
          style={[
            isPrimary ? styles.primaryButtonText : styles.secondaryButtonText,
          ]}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 50,
    width: "80%",
    borderRadius: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: THEME.COLORS.ORANGE,
  },
  secondaryButton: {
    backgroundColor: THEME.COLORS.WHITE,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY,
  },
  primaryButtonText: {
    color: THEME.COLORS.WHITE,
  },
  secondaryButtonText: {
    color: THEME.COLORS.BlACK,
  },
});

export default Button;
