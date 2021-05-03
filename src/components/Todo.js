import React, {useState} from 'react';

const Task = props => {
  const handleClick = ()=> {
    props.toggleItem(props.task.id);
  }

  return (
    <div onClick={handleClick} className={`item${props.task.completed ? ' completed' : ''}`}>
      <p>{props.task.name}</p>
    </div>
  );
};

// export default Todo;