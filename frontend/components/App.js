import React from 'react'

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
    console.log(this.state);

    const { todos } =  this.state; 
    console.log(todos);
    
    return (
      <div>
        <h1>Todo App</h1>

        <ul>
          {
            todos.map(todo => {
              return (<li >{todo.task}</li>) 
            })
          }
        </ul>

        <form>
          <input/>
          <button>add</button>
        </form>

        <button>clear</button>
      </div>
    )
  }
}
