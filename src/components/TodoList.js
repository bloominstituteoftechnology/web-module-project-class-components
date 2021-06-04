import React from 'react';
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleItem={props.toggleCompleted} />
            ))}
        </div>
    )
}