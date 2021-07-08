import React from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

const todoList = [
  {
    task: 'Walk the Dog',
    id: 1,
    completed: false
  },
  {
    task: 'Meal Prep',
    id: 2,
    completed: false
  },
  {
    task: 'Laundry',
    id: 3,
    completed: false
  },
  {
    task: 'Water Plants',
    id: 4,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todoList: todoList
    }
  }
  addTodo = task => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }
  }

  render() {
    return (
      <div>
        <h2>Honey Do List!</h2>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
