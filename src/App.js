import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    task: 'Complete Project MVP',
    id: 1528817077286,
    completed: false

  },
  {
    task: 'Submit Quiz',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Submit Check for Understanding',
    id: 1528817077286,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Constructor state
  constructor() {
    super();
    this.state = {

    }
  }
 
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoForm />
        <TodoList />
      </div>
      
    );
  }
}

export default App;
