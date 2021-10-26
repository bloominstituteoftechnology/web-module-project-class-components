import React from 'react'

const Todo = props => {

    const handleClick = () => {
        props.handleToggleTodo(props.todo)
        console.log(props.todo)
    }

    return (
        <div onClick={handleClick} className={`${props.todo.completed ? 'completed' : ''}`}>
            <p>{props.todo.todo}</p>
        </div>
    )

}

export default Todo