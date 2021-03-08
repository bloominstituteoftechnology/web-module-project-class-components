import React from 'react'

import Todo from './Todo'

export default function TodoList(props) {
    const { todos, toggleCompleted, clearCompleted } = props
    return (
        <ul>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleCompleted={toggleCompleted} 
                    clearCompleted={clearCompleted}
                />
            ))}
        </ul>
    )
}