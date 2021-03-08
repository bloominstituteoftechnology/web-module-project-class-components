import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './components/styled.theme'
import GlobalStyle from './components/styled.global'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()

    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      newTodo: ''
    }
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

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, newTodo]
    })
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

    this.setState({ todos })
  }

  clearCompleted = (evt) => {
    const todos = this.state.todos.filter(todo => !todo.completed)
    this.setState({ todos })
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
