import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoItems = [
  {
    id:0,
    name:"Make bed",
    completed: false
  },
  {
    id:1,
    name:"Stretch",
    completed: false
  },
  {
    id:2,
    name:"Meditate",
    completed: false
  },
  {
    id:3,
    name:"Brush teeth",
    completed: false
  },
  {
    id:4,
    name:"Make tea",
    completed: false
  },
  {
    id:5,
    name:"Study",
    completed: false
  },
  
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoItems: todoItems
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div className="header">
          <h1>Welcome to your Todo App</h1>
          <TodoForm />
        </div>
        <TodoList todoItems={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
