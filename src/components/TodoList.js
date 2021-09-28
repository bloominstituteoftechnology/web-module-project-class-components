import React, { useState } from 'react';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from "./Todo";

const TodoList = props =>
{
    const handleClick = () =>
    {
        props.handleClear();
    };

    return (
        <div className='shopping-list'>
            {props.todoTask.map(task => (
                <Todo handleToggle={props.handleToggle} key={task.id} task={task} />
            ))}
            <button onClick={handleClick} className="clear-btn">
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;