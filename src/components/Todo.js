// takes in the `todo` data and displays
//the task to the screen.

import React from 'react';

import './Todo.css';

const Todo = props =>
{
    const handleClick = ()=>
    {
        props.toggleItem(props.item.id); //toggles item when clicked
    }
    return(
        <div onClick={handleClick} className={`todo${props.item.completed ? 'completed' : ''}`}>
            <p>{props.item.name}</p>
        </div>
    );
    
};

export default Todo;