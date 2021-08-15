import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from '.components/TodoList';


const todoTasks = [
  {
    task: 'Stare out of the window for awhile',
    id: 001,
    completed: false
  },
  {
    task: 'Make coffee',
    id: 002,
    completed: false
  }
  {
    task: 'Check on plants'
    id: 003,
    completed: false
  }
  {
    task: 'Resist obligations'
    id: 004,
    completed: false
  }
  {
    task: 'Laugh at how meteorologists actually receive pay for being 99.999999% inaccurate',
    id: 005,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super():
    //Application state - components and props and bears, OH MY!
    this.state = {
      todoTasks:todoTasks
    }
  }

  toggleTask = 





  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}





export default App;
