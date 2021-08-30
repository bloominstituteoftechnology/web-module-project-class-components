// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const ToDoList = (props) => {

    console.log(props)
    return (
        <div>
            {props.toDoList.map(todo => {
                return <Todo todo={todo}/>
            })}
        </div>
    )
}

export default ToDoList;