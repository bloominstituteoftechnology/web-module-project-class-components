import React from 'react'

function Todo(props) {
    return (
        <div>
            <p onClick= {() => props.toggleCompleted(props.todo.id) }>{props.todo.task}</p>
        </div>
    )
}

export default Todo