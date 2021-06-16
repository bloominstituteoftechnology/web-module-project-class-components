import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledApp = styled.div`
  background-color: red;
`

export default function App() {
  const [questions, setQuestions] = useState([])

  // useEffect(async () => {
  //   const res = await axios.get('http://localhost:5000/api/questions/7')
  //   setQuestions(questions.concat(res.data))
  // }, [])

  // useEffect(async () => {
  //   const res = await fetch('http://localhost:5000/api/questions/2')
  //   const data = await res.json()
  //   setQuestions(questions.concat(data))
  // }, [])

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/questions/7')
  //     .then(res => setQuestions(questions.concat(res.data)))
  // }, [])

  useEffect(() => {
    fetch('http://localhost:5000/api/questions/2')
      .then(res => res.json())
      .then(data => setQuestions(questions.concat(data)))
  }, [])

  return (
    <StyledApp>
      <h1>lady gaga</h1>
      <h3>investigating Codegrade</h3>
      This is the flow students are used to
      {/* <div>{JSON.stringify(questions)}</div> */}
      <h4>{!!questions.length && questions[0].question_title}</h4>
    </StyledApp>
  )
}
