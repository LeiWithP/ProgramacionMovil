import React from "react";
import { View, Text } from "react-native";
import { useAppContext } from "../../hooks/useAppContext";

const CardId = () => {
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
      <Text>Id: {person.id}</Text>
    </View>
  );
};

export default CardId;
