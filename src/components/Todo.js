import  React, { useState } from 'react';

const Todo = props => {
  return (
      <div>
          <p>{props.todo.name}</p>
      </div>
  )
}

export default Todo;