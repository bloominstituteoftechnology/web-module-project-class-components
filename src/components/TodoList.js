import React from 'react'

import Todo from './Todo'

export default function TodoList(props) {
    const { todos, toggleCompleted, clearCompleted } = props
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Todo  
                        todo={todo} 
                        toggleCompleted={toggleCompleted} 
                        clearCompleted={clearCompleted}
                    />
                </li>
            ))}
        </ul>
    )
}