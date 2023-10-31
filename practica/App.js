import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as ReactStatus } from "react-native";
import { THEME } from "./src/theme/styles";
import { NumberButton } from "./src/components/Number";
import { useReducer, useState } from "react";

const CALCULATOR_TYPES = {
  SELECT_NUMBER: "SELECT_NUMBER",
  SELECT_OPERATOR: "SELECT_OPERATOR",
  CALCULATE: "CALCULATE",
  SELECT_FUNCTION: "SELECT_FUNCTION",
};

const initialState = {
  displayNumber: 0,
  operator: "",
  previousNumber: 0,
  currentNumber: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case CALCULATOR_TYPES.SELECT_NUMBER:
      let acumulado = state.currentNumber * 10 + action.payload;
      return {
        ...state,
        displayNumber: acumulado,
        currentNumber: acumulado,
      };
    case CALCULATOR_TYPES.SELECT_OPERATOR:
      return {
        ...state,
        operator: action.payload,
        previousNumber: state.currentNumber,
        currentNumber: 0,
      };
    case CALCULATOR_TYPES.CALCULATE:
      let result = 0;
      switch (state.operator) {
        case "*":
          result = state.previousNumber * state.currentNumber;
          break;
        case "-":
          result = state.previousNumber - state.currentNumber;
          break;
        case "+":
          result = state.previousNumber + state.currentNumber;
          break;
        case "/":
          result = state.previousNumber / state.currentNumber;
          break;
        default:
          return state;
      }
      return {
        ...state,
        previousNumber: 0,
        displayNumber: result,
        currentNumber: result,
      };
    case CALCULATOR_TYPES.SELECT_FUNCTION:
      switch (action.payload) {
        case "C":
          return {
            ...state,
            displayNumber: 0,
            currentNumber: 0,
            operator: "",
            previousNumber: 0,
          };
        case "<-":
          const errased =
            (state.currentNumber - (state.currentNumber % 10)) / 10;
          return {
            ...state,
            currentNumber: errased,
            displayNumber: errased,
          };
        case "%":
          const percent = state.currentNumber / 100;
          return {
            ...state,
            currentNumber: percent,
            displayNumber: percent,
          };
      }
  }
}

export default function App() {
  const [history, setHistory] = useState("");

  const [state, dispach] = useReducer(reducer, initialState);
  const handleSelectNumber = (number) => {
    dispach({ type: CALCULATOR_TYPES.SELECT_NUMBER, payload: number });
  };
  const handleSelectOperator = (operator) => {
    if (state.operator) {
      handleCalculate();
    }
    dispach({ type: CALCULATOR_TYPES.SELECT_OPERATOR, payload: operator });

    setHistory(state.currentNumber + operator);
  };

  const handleCalculate = () => {
    setHistory(state.previousNumber + state.operator + state.currentNumber);
    dispach({ type: CALCULATOR_TYPES.CALCULATE });
  };

  const handleFunction = (task) => {
    dispach({ type: CALCULATOR_TYPES.SELECT_FUNCTION, payload: task });
    if (task === "C") {
      setHistory("");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{history}</Text>
      <Text style={styles.text}>{state.displayNumber}</Text>
      <View style={styles.row}>
        <NumberButton
          text="C"
          role="function"
          onPress={() => handleFunction("C")}
        />
        <NumberButton
          text="%"
          role="function"
          onPress={() => handleFunction("%")}
        />
        <NumberButton
          text="<-"
          role="function"
          onPress={() => handleFunction("<-")}
        />
        <NumberButton
          text="/"
          role="operator"
          onPress={() => handleSelectOperator("/")}
        />
      </View>
      <View style={styles.row}>
        <NumberButton
          text="7"
          role="number"
          onPress={() => handleSelectNumber(7)}
        />
        <NumberButton
          text="8"
          role="number"
          onPress={() => handleSelectNumber(8)}
        />
        <NumberButton
          text="9"
          role="number"
          onPress={() => handleSelectNumber(9)}
        />
        <NumberButton
          text="x"
          role="operator"
          onPress={() => handleSelectOperator("*")}
        />
      </View>
      <View style={styles.row}>
        <NumberButton
          text="4"
          role="number"
          onPress={() => handleSelectNumber(4)}
        />
        <NumberButton
          text="5"
          role="number"
          onPress={() => handleSelectNumber(5)}
        />
        <NumberButton
          text="6"
          role="number"
          onPress={() => handleSelectNumber(6)}
        />
        <NumberButton
          text="-"
          role="operator"
          onPress={() => handleSelectOperator("-")}
        />
      </View>
      <View style={styles.row}>
        <NumberButton
          text="1"
          role="number"
          onPress={() => handleSelectNumber(1)}
        />
        <NumberButton
          text="2"
          role="number"
          onPress={() => handleSelectNumber(2)}
        />
        <NumberButton
          text="3"
          role="number"
          onPress={() => handleSelectNumber(3)}
        />
        <NumberButton
          text="+"
          role="operator"
          onPress={() => handleSelectOperator("+")}
        />
      </View>
      <View style={styles.row}>
        <NumberButton
          text="0"
          role="number"
          onPress={() => handleSelectNumber(0)}
        />
        <NumberButton
          text="="
          role="operator"
          onPress={() => handleCalculate()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingTop: ReactStatus.currentHeight,
    backgroundColor: THEME.COLORS.WHITE,
    gap: 10,
  },
  text:{
    fontSize: 25,
    textAlign: 'right',
    fontWeight: 'bold',
    borderRadius: 20,
    borderColor: 'black',
    paddingVertical: 10,
    borderWidth: 5,
    width: 300,
    paddingHorizontal: 20,
  },
  row:{
    flexDirection: 'row',
    gap: 10,
  }
});

/*

const [screen, setScreen] = useState(1);

  onClickScreen1 = () => {
    setScreen(1);
  };

  onClickScreen2 = () => {
    setScreen(2);
  };

  onClickScreen3 = () => {
    setScreen(3);
  };
  
{
  screen === 1 ? (
  <WelcomeScreen onSignInPress={onClickScreen2} onSignUpPress={onClickScreen3}/>
  ) : screen === 2 ? (
  <SignInScreen onPress={onClickScreen1} />
  ) : (
  <SignUpScreen onPress={onClickScreen1} />
  )}
*/
