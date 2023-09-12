import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ProductCard = ({ imageSource, tag, title, price }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.tag}>#{tag}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>🪙 ${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    margin: 16,
    width: 200,
    height: 340,
    backgroundColor: "#e3e3e3",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  tag: {
    fontSize: 14,
    marginBottom: 8,
    color: "grey",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductCard;
