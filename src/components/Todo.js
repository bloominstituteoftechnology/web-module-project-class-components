// `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
import React, { useState } from 'react';

const Todo = props => {
  const handleClick = ()=> {
    props.handleToggleComplete(props.item.id);
  }

  return (
    <div onClick={handleClick} className={`todo${props.item.completed ? ' completed' : ''}`}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
  
  
  

