import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import { AppContainer, RouteContainer} from './styles/AppStyles';
import PrivateRoute from './PrivateRoute';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Create from './Create';
import Edit from './Edit';
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
        <PrivateRoute path="/edit" component={Edit}/>
        <PrivateRoute path="/create" component={Create}/>

        <Route path="/logout">
          <Logout/>
        </Route>
        
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//1. Add in PrivateRoute