import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import { useState } from "react";
import Todo from "./src/components/Todo";
import CustomButton from "./src/components/CustomButton";
import TodoInput from "./src/components/TodoInput";
import { useTodos } from "./src/hooks/useTodos";

export default function App() {
  const {
    inputValue,
    todos,
    editTodo,
    buttonText,
    todoID,
    handleAddTodo,
    handleCompleteTodo,
    handleDeleteTodo,
    handleEdit,
  } = useTodos()


  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          Todo List
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20, gap: 20 }}>
          <TodoInput
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
          />
          <CustomButton
            text={buttonText}
            light
            onPress={editTodo ? () => handleEditTodo(todoID) : handleAddTodo}
          />
        </View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({
            item: { id, name, isEdited, editDate, isCompleted },
          }) => (
            <Todo
              id={id}
              name={name}
              isCompleted={isCompleted}
              isEdited={isEdited}
              editDate={editDate}
              handleDelete={handleDeleteTodo}
              handleComplete={handleCompleteTodo}
              handleEdit={handleEdit}
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
    backgroundColor: "#fff",
    paddingTop: ReactStatus.currentHeight,
    backgroundColor: "#2a6355",
  },
});

/*

const [screen, setScreen] = useState(1);

  onClickScreen1 = () => {
    setScreen(1);
  };

  onClickScreen2 = () => {
    setScreen(2);
  };

  onClickScreen3 = () => {
    setScreen(3);
  };
  
{
  screen === 1 ? (
  <WelcomeScreen onSignInPress={onClickScreen2} onSignUpPress={onClickScreen3}/>
  ) : screen === 2 ? (
  <SignInScreen onPress={onClickScreen1} />
  ) : (
  <SignUpScreen onPress={onClickScreen1} />
  )}
*/
