import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todos = ['Finish Lambda', 'Get Hired']

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addNewTodo = (name) => {
    const newTodo = name
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTodo={this.addNewTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
