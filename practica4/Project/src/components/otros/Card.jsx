import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Card = ({ isDarkBlue, texto, iconName, iconTypy }) => {
  // const color = isDarkBlue ? "#2663df" : "#e6ecff";

  const IconColor = isDarkBlue ? "#537acd" : "#fff";

  const CustomIcon =
    iconTypy === "AntDesign" ? (
      <AntDesign name={iconName} size={30} color={IconColor} />
    ) : (
      <Ionicons name={iconName} size={30} color={IconColor} />
    );

  return (
    <View
      style={[
        styles.cardContainer,
        isDarkBlue ? styles.cardContainerDark : styles.cardContainerLight,
      ]}
    >
      <View
        style={[
          styles.cardIconContainer,
          isDarkBlue
            ? styles.cardIconContainerDark
            : styles.cardIconContainerLight,
        ]}
      >
        {CustomIcon}
      </View>
      <Text
        style={[
          styles.cardText,
          isDarkBlue ? styles.cardTextDark : styles.cardTextLight,
        ]}
      >
        {texto}
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 200,
    borderRadius: 40,
    padding: 20,
    justifyContent: "space-evenly",
    marginRight: 10,
  },
  cardContainerLight: {
    backgroundColor: "#e6ecff",
  },
  cardContainerDark: {
    backgroundColor: "#3764c2",
  },
  cardIconContainer: {
    backgroundColor: "#2663df",
    width: 50,
    height: 50,
    // padding: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  cardIconContainerDark: {
    backgroundColor: "#e6ecff",
  },
  cardIconContainerLight: {
    backgroundColor: "#2663df",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#48525e",
  },
  cardTextLight: {
    color: "#48525e",
  },
  cardTextDark: {
    color: "#fff",
  },
});