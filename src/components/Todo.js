import React from 'react';

const Todo = props => {

    const handleClick = () => {
        props.handleToggleToComplete(props.item.id);
    }
    return (
        <div onClick={handleClick} className={`item${props.item.cpmpleted ? ' completed' : ''}`}>
           <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;