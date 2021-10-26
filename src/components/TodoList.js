// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo handleToggleTodo={props.handleToggleTodo} key={todo.id} todo={todo} />
            ))}
        </div>
    )

}

export default TodoList