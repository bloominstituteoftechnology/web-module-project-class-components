import React from 'react'
import Todo from './Todo.js';

export default function TodoList(props) {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted}/>
            ))}
        </div>
    )
}
