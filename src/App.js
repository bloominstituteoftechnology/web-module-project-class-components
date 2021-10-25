import React from 'react';
import toDoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    }
  }
  
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
