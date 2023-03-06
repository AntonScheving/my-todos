import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
// https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from "uuid";

const localStorageKey = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey));
    // if (storedTodos) setTodos(storedTodos);
    if (storedTodos.length) setTodos(storedTodos)
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add todo</button>
      <button>Clear completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
