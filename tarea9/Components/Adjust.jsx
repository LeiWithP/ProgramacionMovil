import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Adjust = ({ textTag }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="volume-up" size={20} color="black" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 16,
    width: 60,
    height: 60,
  },
});

export default Adjust;
