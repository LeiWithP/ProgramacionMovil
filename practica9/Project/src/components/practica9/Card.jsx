import React from "react";
import { View } from "react-native";
import CardFooter from "./CardFooter";
import { useAppContext } from "../../hooks/useAppContext";

const Card = () => {
  const {person} = useAppContext();
  return (
    <View>
      <Text>CARD COMPONENT </Text>
      <CardId person={person} />
      <Text>Name: {person.name}</Text>
      <Text>LastName: {person.lastname}</Text>
      <CardFooter person={person} />
    </View>
  );
};

export default Card;
