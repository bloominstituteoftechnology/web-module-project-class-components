import React from 'react'

import styled from 'styled-components'

const TodoWrapper = styled.div`
    border: 1px solid white;
    background-color: ${props => props.theme.lightText};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function Todo(props) {
    const { todo, toggleCompleted } = props
    return (
        <TodoWrapper onDoubleClick={_ => toggleCompleted(todo.id)}>
            <p
                style={{
                    textDecoration: todo.completed ? 'line-through' : ''
                }}
            >{todo.task}</p>
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={_ => toggleCompleted(todo.id)}
            />
        </TodoWrapper>
    )
}