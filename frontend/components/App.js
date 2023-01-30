import React from 'react'
import TodoList from './TodoList';
import TodoForm from './Form';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Walk the dog',
          id: 1234567,
          completed: true
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
        <TodoForm />

        <button>Clear</button>
      </div>
    )
  }
}
