import React from 'react';

const Todo = props => {
    return (
        <div 
        onClick={() => props.toggleFinished(props.todo.id)}
        className={`todo${props.todo.finished ? ' finished' : ''}`}
        >
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;