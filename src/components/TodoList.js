// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
// import TodoForm from './TodoForm'

const TodoList = props => {

    // click handlers?

    return (
        <div>
            {props.todos.map(item => (
                <Todo key={item.id} todo={item} toggleTodo={props.toggleTodo} />
            ))}
        </div>
    );
};

export default TodoList;
