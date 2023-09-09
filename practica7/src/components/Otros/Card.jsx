import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Card = ({ color, text, iconName, iconType }) => {
  const iconColor = color === "darkblue" ? "white" : "black";

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
        { backgroundColor: color },
      ]}
    >
      <View
        style={[
          styles.cardIconContainer,
          // color === "darkblue" ? styles.cardIconContainerDark : styles.cardIconContainerLight,
        ]}
      >
        {CustomIcon}
        <Text
          style={[
            styles.cardText,
            // color === "darkblue" ? styles.cardTextDark : styles.cardTextLight,
          ]}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 160,
    width: 170,
    borderRadius: 30,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  cardIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default Card;
