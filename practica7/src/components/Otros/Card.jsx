import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 220,
    backgroundColor: "#e6ecff",
    borderRadius: 40,
    paddingHorizontal: 30,
    justifyContent: "center",
    gap: 500,
  },
  cardIconContainer: {
    backgroundColor: "",
    justifyContent: "",
    alignItems: "",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "",
  },
});

export default Card;