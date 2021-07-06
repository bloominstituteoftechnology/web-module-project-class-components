import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



class App extends React.Component{
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Walk the dog',
          id: 1,
          completed: false,
        },
        {
          task: 'Wash the dishes',
          id: 2,
          completed: false,
        },
        {
          task: 'Finish my assignment',
          id: 3,
          completed: false,
        },
      ]
    }
  }
  
  addItem = (taskName) => {
    const newTodo = {
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    })
  }

  toggleItem = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed) 
    })
  }

  render() {
    return(
      <div>
        <h2>Daily Tasks</h2>
        <TodoList todos = {this.state.todos} toggleItem = {this.toggleItem} />
        <TodoForm addItem = {this.addItem} />
        <button onClick = {this.clearCompleted}> Finished </button>
      </div>
    )
  }
}

export default App;