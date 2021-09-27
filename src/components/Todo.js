import React from 'react';

const Todo = props => {


    const handleClick = ()=> {
        props.handleToggle(props.todo.id);
        console.log('clicked item', props.todo.complete);
    }

    return (
        <div onClick={handleClick} className={`todo${props.todo.complete ? ' complete' : ''}`}>
            <p>{props.todo.name}</p>
        </div>

    );
};

export default Todo;