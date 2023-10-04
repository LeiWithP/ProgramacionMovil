import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { THEME } from "../../theme/styles";

const CustomButton = ({ text, onPress, light }) => {
  return (
    <TouchableOpacity
      style={[styles.container, light ? styles.light : styles.dark]}
      onPress={onPress}
    >
      <Text style={{ color: light ? "white" : "black" }}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  dark: {
    backgroundColor: THEME.COLORS.RED,
    color: "black",
    borderColor: "black",
  },
  light: {
    color: "white",
    borderColor: "white",
  },
});

export default CustomButton;
