import React from 'react'
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, 
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Clean House',
          id: 1528817077286, 
          completed: false
        },        
      ]
    }
  }

  render() {

    const { todos } =  this.state; 
    
    return (
      <div>
        <h1>Todo App</h1>

        <TodoList todos={todos}/>
        

        <form>
          <input/>
          <button>add</button>
        </form>

        <button>clear</button>
      </div>
    )
  }
}
