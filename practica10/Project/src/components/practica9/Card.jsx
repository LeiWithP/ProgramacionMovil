import React from "react";
import { View, Text} from "react-native";
import CardId from "./CardId";
import CardFooter from "./CardFooter";
import { useAppContext } from "../../hooks/useAppContext";

const Card = () => {
  const { person } = useAppContext();
  return (
    <View
      style={[
        {
          padding: 20,
          borderWidth: 1,
          borderRadius: 20,
        },
        person.isActive === true
          ? { borderColor: "blue" }
          : { borderColor: "red" },
      ]}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
        CARD COMPONENT
      </Text>
      <CardId />
      <Text style={{ fontSize: 20 }}>Name: {person.name}</Text>
      <Text style={{ fontSize: 20 }}>Last Name: {person.lastName}</Text>
      <CardFooter />
    </View>
  );
};

export default Card;
