// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const ToDoList = (props) => {

    return (
        <div>
            {props.toDoList.map(todo => {
                return <Todo todo={todo} key={todo.id} handleToggleComplete={props.handleToggleComplete} />
            })}
        </div>
    )
}

export default ToDoList;