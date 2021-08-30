import React from 'react';

import ToDoList from './components/TodoList';

const toDoList = [
  {
    task: 'Learn React',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Find a job',
    id: Date.now(),
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

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <ToDoList toDoList={toDoList}/>
      </div>
    );
  }
}

export default App;
