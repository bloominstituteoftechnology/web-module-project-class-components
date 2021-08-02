import React from 'react'
import './Todo.css'

const Todo = props => {
    
    const handleClick = () => {
        props.handleItemToggle(props.item.id)
    }

    return (
        <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
            <ul>
                <li>{props.item.task}</li>
            </ul>
        </div>
    )
}

export default Todo
