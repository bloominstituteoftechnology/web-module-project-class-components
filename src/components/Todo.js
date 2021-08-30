// `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
import React, {useState} from 'react'

const Todo = props => {
  const handleClick = ()=> {
    props.handleToggleComplete(props.todo.id);
  }
  return (
    <div onClick={handleClick} className={`todo${props.todo.completed ? ' completed' : ''}`}>
      <p>{props.todo.task}</p>
      
    </div>
  )


}


export default Todo;
  
  
  
  
