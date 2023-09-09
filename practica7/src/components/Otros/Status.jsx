import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Status = ({ text }) => {
  return (
    <View style={styles.square}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    height: 36,
    backgroundColor: "#dedede",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Status;
