import { useState } from "react";
import { handleShowError } from "../helpers/handleShowError";
import ModalTodo from "../components/tarea3/ModalTodo";

export const useTodos = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const [editMode, setEditMode] = useState(false);
  const [todoID, setTodoID] = useState(null);
  const [todo, setTodo] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const getTodo = (id) => {
    const result = todos.find((todo) => todo.id === id);
    return result;
  }

  const handleDetails = (id) => {    
    result = getTodo(id);
    setTodo(result)
    setModalVisible(true);
  }

  function validateInput() {
    if (inputValue === "") {
      handleShowError("El campo no puede estar vacío");
      return false;
    }

    const existingTodo = todos.some(
      (todo) => todo.name.toLowerCase() === inputValue.toLowerCase()
    );

    if (existingTodo) {
      handleShowError("Ya existe una tarea con ese nombre");
      return false;
    }

    return true;
  }

  const handleAddTodo = () => {
    if (!validateInput()) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        name: inputValue,
        createdDate: new Date().toLocaleString(),
        isCompleted: false,
      },
    ]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    const filteredArray = todos.filter((todo) => todo.id !== id);

    setTodos(filteredArray);
  };

  const handleCompleteTodo = (id) => {
    const mappedArray = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }

      return todo;
    });

    setTodos(mappedArray);
  };

  const handleEditMode = (id) => {
    setEditMode(true);
    setTodoID(id);
  };

  const handleEditTodo = (id) => {
    if (!validateInput()) {
      return;
    }

    const mappedArray = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          name: inputValue,
          isEdited: true,
          editDate: new Date().toLocaleString(),
        };
      }

      return todo;
    });

    setTodos(mappedArray);
    setInputValue("");
    setEditMode(false);
  };

  return {
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
    handleEditTodo,
    handleEditMode,
    handleDetails,
  };
};