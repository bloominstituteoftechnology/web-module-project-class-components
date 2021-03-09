import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (
    <div onClick={props.strikeThrough}>
      <p> {props.item.text} </p>
    </div>
  )
}

export default Todo;