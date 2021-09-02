import React from 'react'

const Todo = (props) => {
    const handleClick = () => {
        props.handleToggleTask(props.todo.id);
    }

return (
    <div 
    className={`todo${props.todo.completed ? ' completed' : '' }`}
    onClick={handleClick}
    >
    <p>{props.todo.task}</p>
    </div>
  )
}
export default Todo 