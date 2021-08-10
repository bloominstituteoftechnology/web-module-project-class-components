import React from 'react';
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';

const App = () => {
  return (
    <AppContainer>
      <LambdaHeader/>
      <Header/>
      <RouteContainer>
        <Route exact path="/">
          <Login/>
        </Route>

        <Route path="/login">
          <Redirect to="/"/>
        </Route>
        
        <PrivateRoute path="/view" component={View}/>
    
        <Route path="/logout">
          <Logout/>
        </Route>

      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//1. Add in PrivateRoute



const AppContainer = styled.div`
  background: #eeeeee;
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
