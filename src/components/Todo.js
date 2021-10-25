import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.handleToggleItem(props.item);
    }

    return (
        <div  onClick= {handleClick} className={`item${props.item.completed ? ' completed' : ''}`} >
            <p>{props.item.task}</p>

        </div>
    )
}

export default Todo;