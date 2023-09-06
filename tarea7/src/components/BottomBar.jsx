import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/Entypo";
//import FontAwesomeIcon from "react-native-vector-icons/Feather";

const BottomBar = () => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon name="home" size={30} color={"black"} />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon name="wallet" size={30} color={"black"} />
        <Text style={styles.buttonText}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon name="pie-chart" size={30} color={"black"} />
        <Text style={styles.buttonText}>Chart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon name="cog" size={30} color={"black"} />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 90,
    borderRadius: 30
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});

export default BottomBar;
