import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "./ThemeProvider";

const CalculatorGrid = ({ onPress }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    row: {
      flexDirection: "row",
    },
    button: {
      width: 110,
      height: 70,
      backgroundColor: theme.colors.secondary,
      justifyContent: "center",
      alignItems: "center",
      margin: 5,
      borderRadius: 25,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.colors.text,
    },
  });

  const buttons = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["<", "0", "."],
  ];

  return (
    <View style={styles.container}>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((button, buttonIndex) => (
            <TouchableOpacity
              key={buttonIndex}
              style={styles.button}
              // onPress={() => onPress(button)}
            >
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default CalculatorGrid;
