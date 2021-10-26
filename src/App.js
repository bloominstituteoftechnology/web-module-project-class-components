import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todos = [
  {
    todo: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    todo: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


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

  handleAddItem = (todo) => {

    const newTodo = {
      todo: todo,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleToggleTodo = (todo) => {

    this.setState({
      ...this.state,
      todos: this.state.todos.map(task => {
        if (task.id === todo.id) {
          return ({
            ...todo,
            completed: !todo.completed
          })
        }
        return task
      })
    })

  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>To Do List</h1>
          <TodoForm handleAddItem={this.handleAddItem} />
          <button onClick={this.handleClear}>Clear completed</button>
        </div>
        <div>
          <TodoList handleToggleTodo={this.handleToggleTodo} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
