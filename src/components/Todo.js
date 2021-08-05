import React from 'react'
import '../App'

const Todo = props => {
    return (
        <div className={`todo${props.todo.completed ? 'completed' : '' }`} 
        onClick={() => props.toggleCompleted(props.todo.id)}>
        <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo