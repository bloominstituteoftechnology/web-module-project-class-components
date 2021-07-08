import React from 'react';
import './Todo.css'

function Todo (props) {

    const handleClick = () => {
        props.handleTaskToggle(props.todo.id)
    }
    return (
        <div onClick={handleClick} className={`task${props.todo.completed ? ' completed' : ''}`}>
            <p>{props.todo.task}</p>
        </div>
    )

    
}

export default Todo