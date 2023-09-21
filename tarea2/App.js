import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import Todo from "./src/components/Todo";
import { FontAwesome } from "@expo/vector-icons";
import { DateTime } from "luxon"; // Import luxon DateTime

const TODOS = [
  {
    id: 1,
    name: "Task 1",
    created: "",
    edited: "",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Task 2",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Task 3",
    isCompleted: false,
  },
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue === "") {
      return;
    }

    const now = DateTime.now().setZone("America/Mexico_City"); // Get the current time in Mexico City timezone

    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        name: inputValue,
        created: now.toISO(), // Save the creation time
        edited: "",
        isCompleted: false,
      },
    ]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, editedText) => {
    if (!editedText.trim()) {
      return;
    }
    if (todos.some((todo) => todo.name === editedText && todo.id !== id)) {
      return;
    }

    const now = DateTime.now().setZone("America/Mexico_City"); // Get the current time in Mexico City timezone

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, name: editedText, edited: now.toISO() } // Update the edited time
          : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            color: "#F4F2DE",
          }}
        >
          Todo List
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            gap: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
            placeholder="Add a task"
          />
          <FontAwesome
            name="plus-square"
            color="#E9B384"
            onPress={handleAddTodo}
            style={styles.plusIcon}
          />
        </View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Todo
              name={item.name}
              created={item.created}
              edited={item.edited}
              onDelete={() => handleDeleteTodo(item.id)}
              onEdit={(editedText) => handleEditTodo(item.id, editedText)}
            />
          )}
        />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7C9D96",
    paddingTop: ReactStatus.currentHeight,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#F4F2DE",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  plusIcon: {
    fontSize: 46,
    alignSelf: "center",
  },
});
