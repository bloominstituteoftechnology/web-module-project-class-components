import React, { useEffect, useState } from 'react';
import { Route, NavLink, Redirect } from "react-router-dom";
import { AppContainer, RouteContainer} from './styles/AppStyles';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Create from './Create';
import Edit from './Edit';
import Login from './Login';
import Logout from './Logout';

const articles = [
  {
      id: "UbzNxr",
      headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
      createdOn: "June 23, 2021",
      author: "Hallie Golden",
      image: "https://via.placeholder.com/150",
      summary: "Triple-digit temperatures led to a spike in demand across the region.",
      body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
  },
  {
      id: "FzjKPC",
      createdOn: "June 23, 2021",
      author: "Hallie Golden",
      image: "https://via.placeholder.com/150",
      headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
      summary: "Triple-digit temperatures led to a spike in demand across the region.",
      body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
  },
  {
      id: "MMqR27",
      createdOn: "June 23, 2021",
      author: "Hallie Golden",
      image: "https://via.placeholder.com/150",
      headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
      summary: "Triple-digit temperatures led to a spike in demand across the region.",
      body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
  },
  {
      id: "GXmKab",
      createdOn: "June 23, 2021",
      author: "Hallie Golden",
      image: "https://via.placeholder.com/150",
      headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
      summary: "Triple-digit temperatures led to a spike in demand across the region.",
      body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
  }
];


export default function App() {
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
