import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import CSS from './components/Todo.css'

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

  toggleTodo = id => {
    this.setState({
      ...this.state.todoList,
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return ({
            ...todo,
            completed: !todo.completed
          })
        } else {
          return todo
        }
      })
    })
  }
  addTodo = task => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTodo]
    })
  }

  clearTodo = () => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(todo => {
        return !todo.completed
      })
    })
  }

  render() {
    return (
      <div className='headerDiv'>
        <h1>Honey Do List!</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList clearTodo={this.clearTodo} toggleTodo={this.toggleTodo} todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
