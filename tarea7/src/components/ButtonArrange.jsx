import { StyleSheet, Text, View } from "react-native";
import CircleButton from "./CircleButton";

const ButtonArrange = () => {
  return (
    <View style={styles.container}>
        <CircleButton/>
        <CircleButton/>
        <CircleButton/>
        <CircleButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 350,
  }
});

export default ButtonArrange;