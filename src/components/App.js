import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledApp = styled.div`
  padding: 1rem;
  background-color: lightskyblue;
`

export default function App() {
  const [todos, setTodos] = useState([])

  const getAll = () => fetch('http://localhost:5000/api/todos')
    .then(res => res.json())
    .then(data => setTodos(data))

  const markDone = id => axios.patch(`http://localhost:5000/api/todos/${id}`)
    .then(res => setTodos(res.data))

  useEffect(() => { getAll() }, [])

  return (
    <StyledApp>
      <h1>Todos</h1>
      <h3>React Codegrade Assignment</h3>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              {todo.name} {todo.complete ? 'DONE' : 'pending...'}
              <button onClick={() => markDone(todo.id)}>✔️</button>
            </li>
          ))
        }
      </ul>
    </StyledApp>
  )
}
