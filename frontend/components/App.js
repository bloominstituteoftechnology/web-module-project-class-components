import React from 'react'

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Walk the dog',
          id: 1234567,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 9876543,
          completed: false
        },
        {
          task: 'Organize Garage',
          id: 1357913,
          completed: false
        }
      ]
    }
  }
  render() {
    const { todos } = this.state;
    console.log(todos);

    return (
      <div>
        <h1>Todo App</h1>

        <ul>
          {
            todos.map(todo => {
              return(<li>{todo.task}</li>)
            })
          }
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
