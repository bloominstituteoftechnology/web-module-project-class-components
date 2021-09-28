import React from 'react';

const Todo = (props) =>
{
    
    const handleClick = () =>
    {
        props.handleToggle(props.task.id);
    };

    return (
        <div onClick={handleClick} className={`task${props.task.completed ? ' completed' : ''}`}>
            <p>{props.task.name} should be done</p>
        </div>
    );
};

export default Todo;