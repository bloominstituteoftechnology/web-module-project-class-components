import React from 'react'

import styled from 'styled-components'

const TodoWrapper = styled.div`
    border: 1px solid white;
    background-color: ${props => props.theme.lightText};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        text-decoration: ${props => props.completed ? 'line-through' : ''};
    }
`

export default function Todo(props) {
    const { todo, toggleCompleted } = props
    return (
        <TodoWrapper onDoubleClick={_ => toggleCompleted(todo.id)} completed={todo.completed}>
            <p>{todo.task}</p>
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={_ => toggleCompleted(todo.id)}
            />
        </TodoWrapper>
    )
}