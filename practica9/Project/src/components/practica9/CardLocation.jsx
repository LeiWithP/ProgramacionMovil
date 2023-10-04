import React from "react";
import { View } from "react-native";
import Card from "./Card";
import { AppContext } from "../../context/AppContext";

const CardLocation = () => {
  const { person } = useContext(AppContext);
  return (
    <View>
      <Text>Country: {person.country}</Text>
      <Text>City: {person.city}</Text>
      <Card person={person} />
    </View>
  );
};

export default CardLocation;
