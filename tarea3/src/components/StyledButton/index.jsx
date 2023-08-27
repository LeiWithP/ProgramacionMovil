import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const Sans = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ padding: 10, backgroundColor: "violet" }, style]}
    >
      <Text style={{ textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
};
