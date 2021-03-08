import React from 'react'
import styled from 'styled-components'

import Todo from './Todo'

const TodoListWrapper = styled.ul`
    max-width: 600px;
    margin: 0 auto;
    list-style: none;
    & > li {
        margin-bottom: 1rem;
    }
`

export default function TodoList(props) {
    const { todos, toggleCompleted, clearCompleted } = props
    return (
        <TodoListWrapper>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Todo  
                        todo={todo} 
                        toggleCompleted={toggleCompleted} 
                        clearCompleted={clearCompleted}
                    />
                </li>
            ))}
        </TodoListWrapper>
    )
}