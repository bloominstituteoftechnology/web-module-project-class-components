import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

const list = [
    {
        task: "",
        id: "",
        completed: false
    }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor()
  {
      super();
      this.state = 
      {
          list:list
      }
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
      </div>
    );
  }
}

export default App;
