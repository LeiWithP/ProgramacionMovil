import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  Modal,
  FlatList,
  Pressable
} from "react-native";
import { useState } from "react";

import Todo from "../../components/tarea1/Todo";
import CustomButton from "../../components/tarea1/CustomButton";
import TodoInput from "../../components/tarea1/TodoInput";
import { THEME } from "../../theme/styles";
import { useTodos } from "../../hooks/useTodos";
import ModalTodo from "../../components/tarea3/ModalTodo";

export default function TodoList() {

  const {
    inputValue,
    todos,
    editMode,
    todoID,
    todo,
    modalVisible,
    setInputValue,
    setModalVisible,
    handleAddTodo,
    handleCompleteTodo,
    handleDeleteTodo,
    handleEditMode,
    handleEditTodo,
    handleDetails,
  } = useTodos();

  return (
    <View style={styles.container}>
      
      <ModalTodo todo={todo} modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "left",
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
            text={editMode ? "Edit Task" : "Add Task"}
            onPress={editMode ? () => handleEditTodo(todoID) : handleAddTodo}
          />
        </View>
        <FlatList
          style={{ marginTop: 20 }}
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({
            item: { id, name, isEdited, createdDate, editDate, isCompleted },
          }) => (
            <Todo
              id={id}
              name={name}
              isCompleted={isCompleted}
              isEdited={isEdited}
              editDate={editDate}
              createdDate={createdDate}
              handleDetails={handleDetails}
              handleDelete={handleDeleteTodo}
              handleComplete={handleCompleteTodo}
              handleEditMode={handleEditMode}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.line} />}
          ListFooterComponent={() => <View style={styles.line} />}
        />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: THEME.COLORS.SECONDARY,
    marginVertical: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
