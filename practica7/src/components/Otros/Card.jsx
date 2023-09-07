import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Card = ({ isDarkblue, text, iconName, iconType }) => {
  iconColor =  isDarkblue ? '' : 'white'

  const CustomIcon =
    iconType === "Ionicons" ? (
      <Ionicons color={iconColor} name={iconName} size={30} />
    ) : (
      <AntDesign color={iconColor} name={iconName} size={30} />
    );
  return (
    <View
      style={[
        styles.cardContainer,
        isDarkblue ? styles.cardContainerDark : styles.cardContainerLight,
      ]}
    >
      <View
        style={[
          styles.cardIconContainer,
          isDarkblue
            ? styles.cardIconContainerDark
            : styles.cardIconContainerLight,
        ]}
      >
        {CustomIcon}
        <Text
          style={[
            styles.cardText,
            isDarkblue ? styles.cardContainerDark : styles.cardContainerLight,
          ]}
        >
          Start Training
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 220,
    borderRadius: 40,
    paddingHorizontal: 30,
    justifyContent: "center",
    gap: 500,
  },
  cardContainerDark: {
    backgroundColor: "#e6ecff",
  },
  cardContainerLight: {
    backgroundColor: "#e6ecff",
  },
  cardIconContainer: {
    justifyContent: "",
    alignItems: "",
  },
  cardIconContainerDark: {
    backgroundColor: "",
  },
  cardIconContainerLight: {
    backgroundColor: "",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Card;