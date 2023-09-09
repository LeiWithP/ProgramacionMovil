import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CircleIcon from "./CircleIcon.";

const Card = ({ color, text, iconName, iconType, iconColor, textColor }) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor: color }]}>
      <CircleIcon color={iconColor} iconName={iconName} iconColor={color} />

      <Text style={[ styles.cardText, { color: textColor }] }>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 160,
    width: 170,
    borderRadius: 30,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
    color: "white"
  },
});

export default Card;
