// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";



const TodoList = props => {


    return (
        <div className="todolist">
            {props.todolist.map(todo => (
                <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted} />
            ))}
            <button className="clear-btns" onClick={props.todolist.filter(todo => todo.completed === false)}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;