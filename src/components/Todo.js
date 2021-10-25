import React from 'react';

const Todo = props => {
  const handleClick = ()=> {
    props.handleToggleTask(props.tasks);
  }

  return (
    <div onClick={handleClick}>
      <p>{props.tasks.task}</p>
    </div>
  );
};

export default Todo;