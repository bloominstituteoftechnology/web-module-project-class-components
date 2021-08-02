import React from 'react'
import Todo from './Todo.js';

function TodoList(props) {
    const handleClick = () => {
        props.handleClear();
    }

    return (
        <div>
        {props.todoList.map(todo => (
            <Todo handleCompleted = {props.handleCompleted} key = { todo.id } todo = { todo }/>
        ))}
        <button onClick = {handleClick} className = "clearButton">
            Clear Completed
        </button>
        </div>
    );
}

export default TodoList;