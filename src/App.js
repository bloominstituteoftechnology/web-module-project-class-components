import React, { Component } from "react";
import TodoForm from "./components/TodoForm";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("the hell");
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
