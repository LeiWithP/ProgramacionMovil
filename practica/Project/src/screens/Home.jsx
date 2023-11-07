import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Text>Ir a mi cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;