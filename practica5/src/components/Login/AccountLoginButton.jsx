import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const AccountLoginButton = (props) => {
  return (
    <TouchableOpacity style={styles.iconButton}>
      <Image style={styles.image} source={props.imagePath} />
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    height: 40,
    width: 160,
    padding: 5,
    flexDirection: "row",
    borderBlockColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 15,
    width: 15,
    marginRight: 10,
  },
});

export default AccountLoginButton;
