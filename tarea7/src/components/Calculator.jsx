import React from "react";
import { View, StyleSheet } from "react-native";
import CalculatorButton from "./CalculatorButton"; // Import your CalculatorButton component

const Calculator = ({ onPress }) => {
  const buttonLabels = [
    "1", "2", "3", "4",
    "5", "6", "7", "8",
    "🔙", "9", "0", "X",
  ];

  return (
    <View style={styles.grid}>
      {buttonLabels.map((label) => (
        <CalculatorButton
          key={label}
          label={label}
          onPress={onPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "86%",
  },
});

export default Calculator;
