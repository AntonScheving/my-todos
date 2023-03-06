import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button> Add todo</button>
      <button>Clear completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
