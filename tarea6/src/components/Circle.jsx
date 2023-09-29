import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Circle = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Circle;
