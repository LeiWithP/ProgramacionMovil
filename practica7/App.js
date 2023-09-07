import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  StatusBar as ReactStatus,
  Platform,
} from "react-native";
import { THEME } from "./src/theme/styles";
import Constants from "expo-constants";
import WelcomeScreen from "./src/screens/WelcomeScreen";


export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
    paddingTop: Constants.statusBarHeight,

  },
  text: {
    color: "white",
  },
});