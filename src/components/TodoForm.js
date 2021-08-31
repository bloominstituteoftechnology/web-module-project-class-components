// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
import React, { Component } from 'react'

class TodoForm extends Component {
// Constructor with state
  constructor() {
    super();
    this.state = {
      input:""
    }
  }

  handleChanges = e => {
    //update state with each keystroke
    this.setState({
      input: e.target.value
    });
  };

  // class property to submit form
  handleClick = e => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }


    render() {
      return (
        <form>
          {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
          <input type="text" task="item" onChange={this.handleChanges} />
          <button onClick={this.handleClick}>Add</button>
        </form>
      )
    }
}

export default TodoForm; 
