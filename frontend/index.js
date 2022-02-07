import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'

render(
  <BrowserRouter>
    <React.StrictMode>
      <h1>Todo App</h1>
      <nav>
        <NavLink to="/">Todo App</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
  , document.getElementById('root')
)
