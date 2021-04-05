import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Constructor with State //
  constructor() {
    super();
    this.state = {
      todo: todos
    }
  }




  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
