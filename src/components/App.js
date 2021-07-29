import React, { useEffect, useState } from 'react'
import { Route, NavLink, Redirect } from "react-router-dom";
import styled from 'styled-components'

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Create from './Create';
import Edit from './Edit';
import Login from './Login';
import Logout from './Logout';

const StyledApp = styled.div`
  padding: 1rem;
  background-color: lightskyblue;
  button { margin-left: 4px; }
`

export default function App() {
  return (
    <div>
      <LambdaHeader/>
      <div id="app">
        <Header/>

        <Route exact path="/">
          <Login/>
        </Route>

        <Route path="/login">
          <Redirect to="/"/>
        </Route>
        
        <Route path="/view">
          <View/>
        </Route>

        <Route path="/edit">
          <Edit/>
        </Route>

        <Route path="/create">
          <Create/>
        </Route>

        <Route path="/logout">
          <Logout/>
        </Route>
      </div>
    </div>
  )
}
