import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const todos = [
  {
    name: 'Start todo list',
    id: 1,
    done: false
  },
  {
    name: 'Finish todo list',
    id: 2,
    done: false
  },
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todos
    }
  }

  handleToggleComplete = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if( todo.id === id ) {
          return({
            ...todo,
            done: !todo.done
          })
        }
        return(todo)
      })
    })
  }

  handleAdd = name => {
    const newTodo = {
      name: name,
      id: Date.now(),
      done: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((item) => {
        return(item.done === false)
      })
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd}/>
        <TodoList 
          handleClear={this.handleClear}
          handleToggleComplete={this.handleToggleComplete}
          todos={this.state.todos}  
        />
      </div>
    );
  }
}

export default App;
