import React, { useReducer, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Math.random().toString(), text: action.text }];
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.id ? { ...task, text: action.text } : task
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, dispatch] = useReducer(todoReducer, []);

  const addTask = () => {
    if (taskText.trim() !== "") {
      dispatch({ type: "ADD_TASK", text: taskText });
      setTaskText("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={taskText}
          onChangeText={(text) => setTaskText(text)}
          placeholder="Enter a task"
        />
        <Button title="Add Task" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <TextInput
              style={styles.taskText}
              value={item.text}
              onChangeText={(text) =>
                dispatch({ type: "EDIT_TASK", id: item.id, text })
              }
            />
            <Button
              title="Delete"
              onPress={() => dispatch({ type: "DELETE_TASK", id: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 10,
    padding: 10,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  taskText: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
});
