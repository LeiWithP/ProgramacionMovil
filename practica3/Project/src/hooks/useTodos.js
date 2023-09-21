import { useState } from "react";
import { handleShowError } from "../utils/showError";


export const useTodos = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const [editTodo, setEditTodo] = useState(false);
  const [buttonText, setButtonText] = useState("Add Task");
  const [todoID, setTodoID] = useState(null);


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

  const handleEdit = (id) => {
    setButtonText("Edit Task");
    setEditTodo(true);
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
    setButtonText("Add Task");
    setInputValue("");
    setEditTodo(false);
  };

  return {
    inputValue,
    todos,
    editTodo,
    buttonText,
    todoID,
    handleAddTodo,
    handleCompleteTodo,
    handleDeleteTodo,
    handleEdit,
    handleEditTodo,
  };
};
