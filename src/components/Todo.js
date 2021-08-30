import React from 'react';

const Todo = props => {
    console.log(props)
    const handleClick = () => {
        props.handleToggleComplete(props.item.id);
    }
     
    return (
        <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;