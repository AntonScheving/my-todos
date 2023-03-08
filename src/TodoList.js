// The function exports the TodoList component that accepts two props: todos and toggleTodo. The todos prop is an array of todo items, while toggleTodo is a function that toggles a todo item's completion status.
// The TodoList component returns an array of Todo components that are created from each todo item in the todos array. The map() function is used to iterate through the todos array and create a Todo component for each item. The key prop is assigned to the Todo component with the unique id (c)reated by the uuid dependency). The toggleTodo function is passed down to each Todo component as a prop.

import React from "react";
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
  return ( 
      todos.map(todo => {
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
      })
  );
};
