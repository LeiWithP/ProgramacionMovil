import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CircleIcon = ({ color, iconName, iconColor }) => {
  return (
    <View style={[styles.circle, { backgroundColor: color }]}>
      <Ionicons name={iconName} size={24} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CircleIcon;
