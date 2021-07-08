import React from 'react'

function Todo(props) {
    const handleClick = () => {
        props.toggleTodo(props.todo.id)
    }
    return (
        <div onClick={handleClick}>
            <p>{props.todo.task}</p>
        </div>
    )
}
export default Todo