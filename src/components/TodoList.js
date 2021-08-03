// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    const handleClick = () => {
        props.clearCompleted();
        console.log('App: connected');
    }
    return (
        <div className="todo-list">
            {props.todoList.map(todo => (
                <Todo Toggle={props.toggleTodo} key={todo.id} todo={todo} />
            ))}
            <button onClick={handleClick}>
                Clear Completed
            </button>

        </div>
    )
};
export default TodoList;