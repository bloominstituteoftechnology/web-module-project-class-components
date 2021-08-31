import React from 'react';

import './Todo.css';

const Todo = props => {

    const handleClick = () => {
        props.handleToggle(props.item.id)
    }

    return (
        <div onClick={handleClick} className={`item${props.item.completed ? 'strike' : ''}`}>
            {props.item.task}
        </div>
    )
}

export default Todo;