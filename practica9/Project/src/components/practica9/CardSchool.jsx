import React, { useContext } from "react";
import { View } from "react-native";
import { AppContext } from "../../context/AppContext";
import { useAppContext } from "../../hooks/useAppContext";

const CardSchool = () => {
  const { person, handleIsActive } = useAppContext();

  return (
    <View>
      <Text>CARD SCHOOL</Text>
      <Text>School: {person.school}</Text>
      <TouchableOpacity
        style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}
        onPress={handleIsActive}
      >
        <Text>Is Active: {JSON.stringify(person.isActive)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardSchool;
