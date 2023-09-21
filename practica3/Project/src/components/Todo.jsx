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

const Todo = ({
  id,
  name,
  handleDelete,
  handleComplete,
  handleEdit,
  isEdited,
  editDate,
  isCompleted,
}) => {
  return (
    <View style={[styles.container, isCompleted && styles.todoCompleted]}>
      <Text style={[styles.todoName, isCompleted && styles.todoDarkName]}>
        {name}
      </Text>
      {isEdited && (
        <Text style={[styles.todoName, isCompleted && styles.todoDarkName]}>
          Editado: {editDate}
        </Text>
      )}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton
          text="Edit"
          onPress={() => handleEdit(id)}
          light={!isCompleted}
        />
        <CustomButton
          text="Delete"
          onPress={() => handleDelete(id)}
          light={!isCompleted}
        />
        <CustomButton
          text="Complete"
          onPress={() => handleComplete(id)}
          light={!isCompleted}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#2d705f",
    borderColor: "white",
  },
  todoCompleted: {
    backgroundColor: "#e0e0e0",
    borderColor: "white",
  },
  todoName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  todoDarkName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textDecorationLine: "line-through",
  },
});

export default Todo;
