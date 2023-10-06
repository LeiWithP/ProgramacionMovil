import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../components/ThemeProvider";
import CalculatorGrid from "../components/CalculatorGrid";
import BigButton from "../components/BigButton";
import CircularIcons from "../components/CircularIcons";

function PageTwo() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.colors.background,
      paddingVertical: 40,
    },
    text: {
      fontSize: 18,
      fontWeight: "400",
      color: "grey",
    },
    numbers: {
      fontSize: 52,
      fontWeight: "400",
      color: theme.colors.text,
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <CircularIcons></CircularIcons>
        <Text style={styles.text}>Benjamin Parker</Text>
        <Text style={styles.text}>**** 3294</Text>
      </View>
      <Text style={styles.numbers}>$340.00</Text>
      <CalculatorGrid />
      <BigButton text="Send" />
    </View>
  );
}

export default PageTwo;
