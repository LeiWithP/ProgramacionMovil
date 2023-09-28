import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme/styles";

const NavBar = () => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity>
        <Ionicons name="home" size={24} color={THEME.COLORS.VIOLET}  />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="message-square" size={24} color={THEME.COLORS.VIOLET}  />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="calendar" size={24} color={THEME.COLORS.VIOLET}  />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="person-circle-outline" size={24} color={THEME.COLORS.VIOLET} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 15,
    }
});
