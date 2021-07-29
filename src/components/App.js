import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import styled from 'styled-components'
import axios from 'axios'

const StyledApp = styled.div`
  padding: 1rem;
  background-color: lightskyblue;
  button { margin-left: 4px; }
`


const LambdaHeader = ()=> {
  return(<div>Lambda Header</div>);
}

const Header = ()=> {
  return(<div>App Header</div>);
}

const LoginForm = ()=> {
  return(<div id="Login">Login Form</div>);
}

export default function App() {
  return (
    <div>
      <LambdaHeader/>
      <div id="app">
        <Header/>
        <LoginForm/>
      </div>
    </div>
  )
}
