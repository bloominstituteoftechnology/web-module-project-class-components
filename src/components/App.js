import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledApp = styled.div`
  padding: 1rem;
  background-color: lightskyblue;
`

export default function App() {
  const [todos, setTodos] = useState([])

  // useEffect(async () => {
  //   const res = await axios.get('http://localhost:5000/api/todos')
  //   setTodos(res.data)
  // }, [])

  // useEffect(async () => {
  //   const res = await fetch('http://localhost:5000/api/todos')
  //   const data = await res.json()
  //   setTodos(data)
  // }, [])

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/todos')
  //     .then(res => setTodos(res.data))
  // }, [])

  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  return (
    <StyledApp>
      <h1>Todos</h1>
      <h3>React Codegrade Assignment</h3>
      <ul>
        {
          todos.map(todo => <li key={todo.id}>{todo.name}</li>)
        }
      </ul>
    </StyledApp>
  )
}
