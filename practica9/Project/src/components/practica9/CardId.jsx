import React from "react";
import { View } from "react-native";
import { useAppContext } from "../../hooks/useAppContext";

const CardId = () => {
  const { person } = useAppContext();
  return (
    <View>
      <Text>ID: {person.name}</Text>
    </View>
  );
};

export default CardId;
