import { StatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar as ReactStatus, View } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: ReactStatus.currentHeight,
  },
});