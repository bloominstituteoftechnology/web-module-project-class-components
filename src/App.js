import React from 'react';

import ToDoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const toDoList = [
  {
    task: 'Learn React',
    id: 123,
    completed: false
  },
  {
    task: 'Find a job',
    id: 456,
    completed: false
  }
]

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

  

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm handleAdd={this.handleAdd}/>
        <ToDoList toDoList={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;
