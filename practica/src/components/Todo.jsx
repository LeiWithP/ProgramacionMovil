import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import CustomButton from "./CustomButton";

const Todo = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>{name}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton text="Edit" onPress={() => console.log("Edit")} light/>
        <CustomButton text="Delete" onPress={() => console.log("Delete")} light/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#2d705f",
    borderColor: "white",
  },
});

export default Todo;
