import React from 'react'

function Todo(props) {
    return (
        <div>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo
