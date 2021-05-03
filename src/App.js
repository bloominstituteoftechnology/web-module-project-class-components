// Initialize //

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './todo.css'

const todos = [
  {
    name: 'Purchase groceries',
    id: 123,
    completed: false,
  },
  {
    name: 'Feed cat',
    id: 124,
    completed: false,
  },
  {
    name: 'Pay bills',
    id: 125,
    completed: false,
  },
  {
    name: 'Call the bank',
    id: 126,
    completed: false,
  },
  {
    name: 'Wash the car',
    id: 127,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Constructor with State //
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  toggleTodo = (id) => {

    const newTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return ( {
          ...todo,
          completed: !todo.completed
        });
      } else {
        return todo
      }
    })
    
    this.setState({
      todos: newTodo
    })
  }

  addTodo = ( todoName ) => {
    this.setState({
      todos: [...this.state.todos, {
        name: todoName,
        id: Math.random(),
        completed: false,
      }]
    })
  }

  clearCompleted = evt => {
    this.setState({
      todos: this.state.todos.filter(todo => (!todo.completed))
    })
  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleTodo={this.toggleTodo} todos={ this.state.todos } clearCompleted={this.clearCompleted}/>
        <TodoForm addTodo={ this.addTodo }/>
      
      </div>
    );
  }
}

export default App;
