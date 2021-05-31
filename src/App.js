import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: "",
    }
  }
  render() {
    handleOnClick = () => {
      this.setState()
    }
    return (
      <div>
        <h1> ToDo List: MVP</h1>
        Input <input type="text"></input>
        <button>Submit</button>
        <button>Remove</button>
      </div>
    );
  }
}

export default App;

// On the submit I want to create a new entry and it to be posted above the current Text.