
import React from 'react';

const Todo = props => {
  const handleClick = ()=> {
    props.handleToggleItem(props.task);
  }

  return (
    <div onClick={handleClick} className={`item${props.task.completed ? ' purchased' : ''}`}>
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;