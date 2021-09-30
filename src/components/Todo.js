import React from 'react';

function Todo(props) {
  return (
    <div>
      <p 
        style= {{ textDecoraction: props.todo.completed ? "line-through": null }} 
        onClick={() => props.toggleTodo (props.todo.id)}
      >
      {props.todo.task}
      </p>
    </div>
  )
}

export default Todo
