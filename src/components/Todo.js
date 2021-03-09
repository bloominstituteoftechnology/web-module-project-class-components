import React from 'react';
import './Todo.css';

const Todo = (props) => {
  console.log(props)
  console.log(props.item)
  return (
    <div 
    onClick={props.strikeThrough}
    className={`item ${props.complete ? "complete" : ''}` }>
      <p> {props.item} </p>
    </div>
  )
}

export default Todo;