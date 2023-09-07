import { StyleSheet, Text, View } from "react-native";
import SecondTopBar from "../components/SecondTopBar";
import ThreeLayerComponent from "../components/ThreeLayerComponent";

const Second = () => {
  return (
    <View style={styles.container}>
      <SecondTopBar
        title="Withdraw Money"
        leftIcon="chevron-left"
        rightIcon="star"
      />
      <ThreeLayerComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d96e43",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  section: {
    height: 360,
    width: 360,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default Second;
