import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useAuth from "../hooks/useAuthContext";
import { useNavigation } from "@react-navigation/native";

const Details = () => {
  const { handleLogout: onLogout } = useAuth();

  const handleLogout = () => {
    onLogout();
    useNavigation.navigation.navigate("Login");
  };
  return (
    <View>
      <Text>Account</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          borderRadius: 5,
          padding: 10,
          margin: 10,
        }}
        onPress={onLogout}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;