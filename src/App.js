import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './components/styled.theme'
import GlobalStyle from './components/styled.global'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const updateStoredTodos = (todos) => window.localStorage.setItem('todos', JSON.stringify(todos))

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()

    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  componentDidMount() {
    let savedTodos = window.localStorage.getItem('todos')
    if (!savedTodos) return

    savedTodos = JSON.parse(savedTodos)
    this.setState({
      todos: savedTodos
    })
  }

  onChange = (evt) => {
    this.setState({
      newTodo: evt.target.value
    })
  }

  addTodo = (evt) => {
    evt.preventDefault()

    const task = this.state.newTodo.trim()
    if (!task) return

    const newTodo = {
      task,
      id: Date.now(),
      completed: false
    }

    const todos = [...this.state.todos, newTodo]

    this.setState({
      newTodo: '',
      todos
    }, () => updateStoredTodos(todos))
  }

  toggleCompleted = (todoId) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })

    this.setState({ todos }, () => updateStoredTodos(todos))
  }

  clearCompleted = (evt) => {
    const todos = this.state.todos.filter(todo => !todo.completed)
    this.setState({ todos }, () => updateStoredTodos(todos))
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          newTodo={this.state.newTodo}
          onChange={this.onChange}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
        <TodoList 
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
      </ThemeProvider>
    );
  }
}

export default App;
