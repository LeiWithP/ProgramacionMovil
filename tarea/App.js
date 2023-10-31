import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import CButton from "./src/components/CButton";

// Reducer function to handle calculator actions
const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "APPEND_DIGIT":
      if (state.display === "0" || state.display === "Error") {
        return { ...state, display: action.payload };
      } else {
        return { ...state, display: state.display + action.payload };
      }
    case "CLEAR_DISPLAY":
      return { ...state, display: "0" };
    case "CALCULATE_RESULT":
      try {
        const result = eval(state.display);
        return { ...state, display: result.toString() };
      } catch (error) {
        return { ...state, display: "Error" };
      }
    default:
      return state;
  }
};

export default function App() {
  const initialState = { display: "0" };
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleButtonPress = (value) => {
    switch (value) {
      case "C":
        dispatch({ type: "CLEAR_DISPLAY" });
        break;
      case "=":
        dispatch({ type: "CALCULATE_RESULT" });
        break;
      default:
        dispatch({ type: "APPEND_DIGIT", payload: value });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{state.display}</Text>
      </View>
      <View style={styles.keyboard}>
        <View style={styles.row}>
          <CButton text="C" buttonPress={() => handleButtonPress("C")} />
          <CButton text="%" buttonPress={() => handleButtonPress("%")} />
          <CButton text="<" buttonPress={() => handleButtonPress("<")} />
          <CButton text="/" buttonPress={() => handleButtonPress("/")} />
        </View>
        <View style={styles.row}>
          <CButton text="7" buttonPress={() => handleButtonPress("7")} />
          <CButton text="8" buttonPress={() => handleButtonPress("8")} />
          <CButton text="9" buttonPress={() => handleButtonPress("9")} />
          <CButton text="*" buttonPress={() => handleButtonPress("*")} />
        </View>
        <View style={styles.row}>
          <CButton text="4" buttonPress={() => handleButtonPress("4")} />
          <CButton text="5" buttonPress={() => handleButtonPress("5")} />
          <CButton text="6" buttonPress={() => handleButtonPress("6")} />
          <CButton text="-" buttonPress={() => handleButtonPress("-")} />
        </View>
        <View style={styles.row}>
          <CButton text="1" buttonPress={() => handleButtonPress("1")} />
          <CButton text="2" buttonPress={() => handleButtonPress("2")} />
          <CButton text="3" buttonPress={() => handleButtonPress("3")} />
          <CButton text="+" buttonPress={() => handleButtonPress("+")} />
        </View>
        <View style={styles.row}>
          <CButton text="!" buttonPress={() => handleButtonPress("!")} />
          <CButton text="0" buttonPress={() => handleButtonPress("0")} />
          <CButton text="." buttonPress={() => handleButtonPress(".")} />
          <CButton text="=" buttonPress={() => handleButtonPress("=")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  display: {
    width: "100%",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "purple",
    margin: 10,
  },
  displayText: {
    color: "white",
    fontSize: 60,
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
