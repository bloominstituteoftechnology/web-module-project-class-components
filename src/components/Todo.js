import React from 'react';

const Todo = (props) => {

    const handleClick = () => {
        props.handleToggleComplete(props.todo.id)
    }

    return (
        <div onClick={handleClick} className={`${props.todo.completed ?'completed' : ''}`}>
            <h3>{props.todo.task}</h3>
        </div>
    )
}

export default Todo;