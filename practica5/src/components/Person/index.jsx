import React from "react";
import {
    View,
    Text,
  } from "react-native";

const Person = ({ name, lastName, index}) => {
  return (
    <View style={{ borderWidth: 1, borderColor: index % 2 ? "red" : "blue" }}>
      <Text style={{ fontSize: 40 }}>{name}</Text>
      <Text style={{ fontSize: 40 }}>{lastName}</Text>
    </View>
  );
};

export default Person;