import React from "react";

const Todo = props => {
    const handleClick = () => {
        props.handleToggleTodo(props.todo);
    }

    return (
        <div onClick={handleClick} className={`item${props.todo.done ? 'done' : ''}`}>
            <p>{props.todo.name}</p>  
        </div>
);
};
export default Todo;