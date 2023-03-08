
// The App component uses the React hooks useState, useRef, and useEffect. The component includes the following parts:
// useState is used to declare a todos state variable and a setTodos function to update it. The initial value of todos is an empty array [].
// useRef is used to create a reference to the input field, todoNameRef.
// useEffect is used to update the todos state variable from local storage on mount. The effect is run only once, on the initial mount of the component.
// Another useEffect is used to save the todos to localStorage
import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
// https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from "uuid";

const localStorageKey = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey));
    // with <React.StrictMode> disabled in index.js
    // if (storedTodos) setTodos(storedTodos)

 // with <React.StrictMode> enabled in index.js
 setTodos( prevTodos => [...prevTodos, ...storedTodos] );
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) { 
    // create a copy
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  // handleClearTodos is a function that is called when the "Clear completed" button is clicked. It filters out the completed todos from the todos array using the filter method and creates a new array with the remaining todos. The new array is then passed to the setTodos function to update the state of the todos array and cause a re-render.
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos);
  }

  // The return statement in the App component returns a fragment containing the TodoList component, an input field for adding new todos, a button for adding new todos, a button for clearing completed todos, and a div that shows the number of incomplete todos. The TodoList component is passed the todos array and the toggleTodo function as props.
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add todo</button>
      <button onClick={handleClearTodos}>Clear completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
