import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const todoItems = [
  
  
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoItems: todoItems
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleSubmit = (input) => {

    const newTodo = {
      task: input,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todoItems: [...this.state.todoItems, newTodo]
    })
  }

  handleDone = (id) => {
    this.setState({
      ...this.state,
      todoItems: this.state.todoItems.map(item => {
        if (item.id === id) {
          return ({
            ...item,
            completed: !item.completed
          });
        } else {
          return item;
        }
      })
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todoItems: this.state.todoItems.filter(item => {
        if (item.completed === false) {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Things to do...</h1>
        <TodoList todoItems={this.state.todoItems} handleDone={this.handleDone}/>
        <TodoForm handleSubmit={this.handleSubmit} handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
