import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tag = ({ textTag }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textTag}</Text>
      <Text style={styles.ex}>x</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    width: 90,
    height: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: "grey",
    fontWeight: "100",
  },
  ex: {
    fontSize: 18,
    color: "grey",
    fontWeight: "400",
    marginLeft: 8,
  },
});

export default Tag;
