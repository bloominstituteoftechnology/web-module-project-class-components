import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = ({
      task: 'make dinner',
      id: Date.now(),
      completed: false
    })
}


  render() {
    return (
      <div>
        <form>
        <label htmlFor="task">To-do
          <input name="task" type="text" />
        </label>
        <button type="submit">Add Task</button>
        </form>
        <div>{this.state.task}</div>
      </div>

    );
  }
}

export default App;
