import React from 'react'
import ToDo from './TodoList';
import ToDoList from './TodoList';






export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
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
    const { todos } = this.state;
    console.log(todos)
    return (
      <div>
        <h1>TODOS</h1>
        <ToDoList todos={todos}/>
        <form>
          <input type="text" />
          <button>ADD</button>
          <button>CLEAR</button>
        </form>
      </div>
    )

  }
}
