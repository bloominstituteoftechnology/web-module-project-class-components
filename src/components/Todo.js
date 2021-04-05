import React from 'react';

const Todo = props => {

  const handleClick = () => {
    props.toggleItem(props.item.id);
  }

  return (
    <div className={`item${props.item.completed ? ' completed' : ''}`}>
      {props.item.name}
      <input type='checkbox' onClick={handleClick}></input>
    </div>
  );
};

export default Todo;