import React from 'react';

import TodoList from "./components/TodoList"

const tasks = [
  {
    task: "Do Dishes",
    id: 123,
    completed: false
  },
  {
    task: "Sweep",
    id: 124,
    completed: false
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
        </div>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
