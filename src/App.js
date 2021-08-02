import React from 'react';

const tasks = [
  {
    task: "Do Dishes",
    id: 123,
    completed: false,
  },
  {
    task: "Sweep",
    id: 124,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: tasks
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
