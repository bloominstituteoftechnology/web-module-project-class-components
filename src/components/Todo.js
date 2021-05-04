import React from 'react'
import './Todo.css'

export default function Todo (props) {

    const handleClick = (event) => {
        props.changeTodoStatus(props.todo)
        console.log(event.target)
    }

    return (
        <div onClick={handleClick} className={`item ${props.todo.completed ? 'completedTodo' : ''}`}>
            <p>{props.todo.name}</p>
        </div>
    )
}
