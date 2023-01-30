import React from 'react'
import TodoList from './TodoList';

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
      ]
    }
  }
  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={ todos }/>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
