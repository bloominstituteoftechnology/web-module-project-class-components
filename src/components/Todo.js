import React, { useState } from 'react';

const Todo = props => {
  const handleClick = ()=> {
    props.handleToggle(props.item.id);
  }
  return (
    <div onClick={handleClick} className={`item${props.item.done ? ' done' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};
export default Todo;