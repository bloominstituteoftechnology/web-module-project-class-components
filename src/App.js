import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

const todos = [
  {
    task: 'Finsh Lambda',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Get Hired',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  addNewTodo = (inputValue) => {
    const newTodo = {
      task: inputValue,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleToggleComplete = id => {
    // console.log('toggle complete from app.js');
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
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

  handleClearComplete = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }

  render() {
    return (
      <div className='app-container'>
        <header className='welcome-header'>Welcome to your Todo App!</header>
        <TodoForm addNewTodo={this.addNewTodo}/>
        <TodoList
          handleClearComplete={this.handleClearComplete}
          handleToggleComplete={this.handleToggleComplete}
          todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
