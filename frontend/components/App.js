import React from 'react'

import TodoList from './TodoList'
import TodoForm from './Form'


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos:[
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  render() {
    const {todos} = this.state
    
    return (
      <div>
        <h1>Todos</h1>


        <TodoList todos={todos}/>

        <TodoForm/>

        <button>Clear</button>
      </div>
    )
  }
}
