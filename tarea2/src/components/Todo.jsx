import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Todo = ({ name, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome
          name={isChecked ? "check-square" : "square-o"}
          size={24}
          color={isChecked ? "#E9B384" : "#E9B384"}
          onPress={toggleCheckbox}
          style={styles.checkbox}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#E9B384" }}>
          {name}
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Entypo
          name="edit"
          size={24}
          color="#E9B384"
          onPress={() => console.log("Edit")}
        />
        <Entypo
          name="trash"
          size={24}
          color="#E9B384"
          onPress={onDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#F4F2DE",
  },
  checkbox: {
    alignSelf: "center",
    marginRight: 10,
  },
});

export default Todo;
