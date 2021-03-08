import React from 'react'
import styled from 'styled-components'

const TodoFormWrapper = styled.div`
    display: flex;
    margin: 0 auto 1rem;
    max-width: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => `2px solid ${props.theme.lightText}`};
    padding-bottom: 1rem;

    form {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        input {
            margin: 0 1rem;
            padding: 0.5rem 1rem;
            flex-grow: 1;
        }
        label {
            color: ${props => props.theme.lightText};
        }
    }

    button {
        padding: 0.5rem 1rem;
        border: ${props => `2px solid ${props.theme.lightText}`};
        background-color: transparent;
        transition: all 0.3s ease-in;
        
        &:not(:disabled) {
            color: ${props => props.theme.lightText};

            &:hover {
                color: ${props => props.theme.darkText};
                background-color: ${props => props.theme.lightText};
            }
        }
    }

    & > button {
        align-self: flex-end;
    }
`

export default function TodoForm(props) {
    const { newTodo, onChange, addTodo, clearCompleted } = props

    return (
        <TodoFormWrapper>
            <form onSubmit={addTodo}>
                <label htmlFor="new-todo">New Todo</label>
                <input 
                    id="new-todo"
                    name="new-todo"
                    type="text"
                    value={newTodo}
                    onChange={onChange}
                />
                <button type="submit" disabled={!newTodo}>Add Todo</button>
            </form>
            <button onClick={clearCompleted}>Clear Completed</button>
        </TodoFormWrapper>
    )
}