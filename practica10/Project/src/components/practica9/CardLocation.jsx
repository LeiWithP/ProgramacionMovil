import React from "react";
import { View, Text } from "react-native";
import CardAge from "./CardAge";
import { useAppContext } from "../../hooks/useAppContext";


const CardLocation = () => {
  const { person } = useAppContext();
  return (
    <View
      style={{
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 10,
      }}
    >
      <Text>Country: {person.country}</Text>
      <Text>City: {person.city}</Text>
      <CardAge />
    </View>
  );
};

export default CardLocation;
