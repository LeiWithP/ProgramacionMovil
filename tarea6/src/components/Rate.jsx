import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Rate = ({ title, active }) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "flex-start" }}>
        <Text style={styles.text2}>Rate Type</Text>
        <Text style={styles.text1}>{title}</Text>
      </View>
      <FontAwesome
        style={{ alignSelf: "flex-end" }}
        name="check"
        size={20}
        color="orange"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 178,
    width: 178,
    padding: 20,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
    fontWeight: "300",
  },
});

export default Rate;
