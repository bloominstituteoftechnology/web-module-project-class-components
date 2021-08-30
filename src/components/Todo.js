import React from 'react'

const Todo = props => {
    const handleToggleComplete = id => {
        props.handleToggleComplete(props.todo.id)
    }

    return (
        <div
            onClick={handleToggleComplete}
            className={`item${props.todo.completed ? ' completed' : ''}`}>
            <li>{props.todo.task}</li>
        </div>   
    )
}

export default Todo