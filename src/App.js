import React from 'react';
import '../src/components/Todo.css'

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      id: null,
      completed: false,
    }
  }
  render() {
    return (
      <div>
        <h1>Well hey there little buddy.</h1>
      </div>
    );
  }
}



