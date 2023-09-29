import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Circle from "./Circle";

const Tickets = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.text}>Ticket 1</Text>
        <FontAwesome name="refresh" size={20} color="white" />
      </View>
      <View style={styles.section}>
        <Circle text="1" />
        <Circle text="7" />
        <Circle text="14" />
        <Circle text="16" />
        <Circle text="19" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a633b",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 360,
    height: 140,
    borderRadius: 14,
  },
  section: {
    width: 360,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Tickets;
