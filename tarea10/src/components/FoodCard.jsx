import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeProvider";

const FoodCard = ({ text, price, onPress }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      borderColor: theme.primary,
      borderWidth: 1,
      width: 240,
      height: 280,
      marginRight: 20,
      padding: 20,
      paddingBottom: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 14,
    },
    title: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "600",
    },
    price: {
        color: theme.primary,
        fontSize: 28,
        fontWeight: "600",
      },
    image: {
      width: 140,
      height: 140,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={require("../../assets/burger.png")}
        style={styles.image}
      />
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.price}>${price}</Text>
    </TouchableOpacity>
  );
};

export default FoodCard;
