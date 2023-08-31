import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { THEME } from "../../theme/colors";

const IconButton = (props) => {
  return (
    <TouchableOpacity style={styles.iconButton}>
      <Image style={styles.image} source={props.image} />
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20
  },
  iconButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    height: "100%",
    width: 150,
    borderColor: THEME.COLORS.GREY,
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 17,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 10
  }
});

export default IconButton;