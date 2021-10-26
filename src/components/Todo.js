import React from 'react';

const Todo = props => {
  const handleClick = ()=> {
    props.handleToggle(props.task);
  }

  return (
    <div onClick={handleClick} className={`task${props.task.completed ? ' completed' : ''}`}>
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;