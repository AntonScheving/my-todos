// The Todo component receives the todo object and toggleTodo function as props. It renders a div with a label containing a checkbox and the todo name. The checked attribute of the checkbox is set to the complete property of the todo object. The onChange attribute of the checkbox is set to the handleTodoClick function, which toggles the todo's completeness status when the checkbox is clicked.

import React from 'react'

export default function Todo({ todo, toggleTodo }) {
function handleTodoClick() {
    toggleTodo(todo.id)
}

  return (
    <div>
        <label className="txt">
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo.name }
        </label>
    </div>
  )  
}
