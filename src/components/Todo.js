import React from 'react'
import './Todo.css'

const Todo = (props) => {
    const handleClick = () => {
        props.handleTaskToggle(props.task.id)
    }
    return (
        <div
        className={`task${props.task.completed ? ' completed' : ''}`}
        onClick={handleClick}
        >
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo