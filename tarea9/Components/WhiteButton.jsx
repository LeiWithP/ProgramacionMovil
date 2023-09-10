import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

function WhiteButton(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.buttonText1}>{props.title1}</Text>
        <Text style={styles.buttonText2}>{props.title2}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 60,
    marginVertical: 10,
    borderColor: "grey",
    borderWidth: 0.2,
  },
  buttonText1: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonText2: {
    color: "orange",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default WhiteButton;
