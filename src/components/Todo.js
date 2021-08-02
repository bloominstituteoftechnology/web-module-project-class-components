import React from 'react';
import './Todo.css';

function Todo(props) {

    const handleClick = () => {
        props.handleCompleted(props.todo.id);
    }
    return (
        <div onClick = {handleClick} className = {props.todo.completed ? 'complete' : 'notCompleted'}>
            <p>{props.todo.task}</p>
        </div>
    );
}

export default Todo;