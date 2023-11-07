import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { THEME } from "../theme/styles";

const CustomButton2 = ({ isPrimary, text, secondText, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        color && { backgroundColor: color }, // Apply the custom color if provided
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
    marginTop: 20,
    marginBottom: 10,
    height: 60,
    width: "85%",
    borderRadius: 50,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: THEME.COLORS.ORANGE.CRAYOLA,
  },
  secondaryButton: {
    backgroundColor: THEME.COLORS.WHITE,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY,
  },
  primaryButtonText: {
    fontWeight: "bold", 
    color: THEME.COLORS.WHITE,
  },
  secondaryButtonText: {
    color: THEME.COLORS.BlACK,
  },
});

export default CustomButton2;