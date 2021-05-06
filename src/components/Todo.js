import React from "react";

const Todo = props => {
    const todoList = props.todoList;

    return (
        <ul>
            {todoList.map( todo => (
                               <li
                                   key={todo}
                                   className="todo-item">{todo}</li>
                           ),
            )}
        </ul>
    );
};

export default Todo;