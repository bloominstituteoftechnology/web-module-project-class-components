// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    const handleClick = ()=> {
        props.handleClear();
    }

    return (
        <div className="todo-list">
            {props.todos.map(todo => (
                <Todo handleToggle={props.handleToggle} key={todo.id} todo={todo}/>
            ))}
            <button onClick={handleClick} className="clear-btn">Clear Completed
            </button>
        </div>
    );
};
export default TodoList;