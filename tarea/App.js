import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CButton from "./src/components/CButton";

export default function App() {
  const [display, setDisplay] = useState("0");

  const handleButtonPress = (value) => {
    if (display === "0" && value !== "C") {
      setDisplay(value);
    } else if (value === "C") {
      setDisplay("0");
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.keyboard}>
        <View style={styles.row}>
          <CButton text="7" buttonPress={() => handleButtonPress("7")} />
          <CButton text="8" buttonPress={() => handleButtonPress("8")} />
          <CButton text="9" buttonPress={() => handleButtonPress("9")} />
          <CButton text="C" buttonPress={() => handleButtonPress("C")} />
        </View>
        <View style={styles.row}>
          <CButton text="4" buttonPress={() => handleButtonPress("4")} />
          <CButton text="5" buttonPress={() => handleButtonPress("5")} />
          <CButton text="6" buttonPress={() => handleButtonPress("6")} />
          <CButton text="=" buttonPress={() => handleButtonPress("=")} />
        </View>
        <View style={styles.row}>
          <CButton text="1" buttonPress={() => handleButtonPress("1")} />
          <CButton text="2" buttonPress={() => handleButtonPress("2")} />
          <CButton text="3" buttonPress={() => handleButtonPress("3")} />
          <CButton text="+" buttonPress={() => handleButtonPress("+")} />
        </View>
        <View style={styles.row}>
          <CButton text="/" buttonPress={() => handleButtonPress("/")} />
          <CButton text="0" buttonPress={() => handleButtonPress("0")} />
          <CButton text="*" buttonPress={() => handleButtonPress("*")} />
          <CButton text="-" buttonPress={() => handleButtonPress("-")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  display: {
    width: "100%",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#222",
  },
  displayText: {
    color: "white",
    fontSize: 40,
  },
  keyboard: {
    backgroundColor: "pink",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
