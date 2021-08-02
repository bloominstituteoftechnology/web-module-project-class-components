import { isTemplateElement } from '@babel/types';
import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// const initialStateValues = [
//     {
//       task: '',
//       id: Date.now(),
//       completed: false,
//     }
// ]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: [],
    };
  }

  handleCompleted = (id) => {
    this.setState({
      todoData: this.state.todoData.map(todo => {
        if (todo.id === id) {
            return({
              ...todo,
              completed: !todo.completed
            });
        }
        return todo;
      })
    });
  }

  handleAddTodo = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todoData: [...this.state.todoData, newTodo]
    })
  }

  handleClear = () => {
      this.setState ({
        ...this.state,
        todoData: this.state.todoData.filter(todo => {
          return (todo.completed === false);
        })
      });
  }

  render() {
    return (
      <div className = 'App'>
        <div className = 'Header'>
            <h2>Todo List: MVP</h2>
            <TodoForm handleAddTodo = {this.handleAddTodo}/>
        </div>
        <TodoList handleCompleted = {this.handleCompleted} todoList = {this.state.todoData} handleClear= {this.handleClear}/>
      </div>
    );
  }
}

export default App;
