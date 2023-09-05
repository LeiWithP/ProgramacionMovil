import {
  StyleSheet,
  View,
  Text,
  StatusBar as ReactStatus,
  Platform,
} from "react-native";
import { THEME } from "./src/theme/styles";
import Constants from "expo-constants";

// const CustomText = Platform.select({
//   ios: () => require("./src/components/IosText"),
// })();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.select({
      android: "red",
      ios: "blue",
      web: "green",
    }),
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        backgroundColor: "red",
        padding: 20,
      },
    }),
  },
  text: {
    color: "white",
  },
});
