import React from 'react';

import ToDoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './components/Todo.css'

const toDoList = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      toDoList: toDoList
    }
  
  }

  handleAdd = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      toDoList: [...this.state.toDoList, newTask]
    })
  }

  handleToggleComplete = (id) => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.map(todo => {
        if (todo.id === id) {
          return ({
            ...todo,
            completed: !todo.completed
          })
        } else {
          return todo;
        }
      })
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.filter((item)=> {
        return(item.completed === false)
      })
    })
  }


  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm handleAdd={this.handleAdd} handleClear={this.handleClear}/>
        <ToDoList toDoList={this.state.toDoList} handleToggleComplete={this.handleToggleComplete}/>
      </div>
    );
  }
}

export default App;
