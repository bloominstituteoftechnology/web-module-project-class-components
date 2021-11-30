import React from 'react';

const Task = props => {
  const handleClick = ()=> {
    props.handleToggleTask(props.item);
  }

console.log(props)

  return (
    <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
      <p>{props.item.agenda}</p>
    </div>
  );
};

export default Task; 