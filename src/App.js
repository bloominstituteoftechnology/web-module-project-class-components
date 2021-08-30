import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { findAllByTestId } from '@testing-library/react';

 // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

const todoList = [
  {
    task: 'Laundry',
    id: 123,
    completed: false
  },
  {
    task: 'Dishes',
    id: 135,
    completed: false
  },
  {
    task: 'Vacuum',
    id: 2469,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoList
    }
  }

  handleAdd = (name) => {
    const addList = {
      task: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, addList]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(item => {
        return (item.completed === false);
      })
    })
  }

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return ({
            ...item,
            completed: !item.completed
          })
        } else {
          return (item)
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todoList} handleToggle={this.handleToggle} />
        <TodoForm handleAdd={this.handleAdd} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
