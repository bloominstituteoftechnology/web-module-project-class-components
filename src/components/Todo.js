import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (
    <div 
    onClick={props.strikeThrough}
    className={`item ${props.complete ? "complete" : ''}` }>
      <p> {props.item} </p>
    
    </div>
  )
}

export default Todo;