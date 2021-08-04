import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import { AppContainer, RouteContainer} from './styles/AppStyles';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Create from './Create';
import Edit from './Edit';
import Login from './Login';
import Logout from './Logout';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState({});

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
        
        <Route path="/view">
          <View articles={articles}/>
        </Route>

        <Route path="/edit">
          <Edit articles={articles}/>
        </Route>

        <Route path="/create">
          <Create/>
        </Route>

        <Route path="/logout">
          <Logout/>
        </Route>
      </RouteContainer>
    </AppContainer>
  )
}
