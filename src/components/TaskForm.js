import React from "react";

class TaskForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      input:""
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      input: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.input);
    this.setState({
      input: ""
    });
    console.log("state after submit: ", this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChanges} type="text" name="item" value={this.state.input} />
        <button>Add</button>
      </form>
    );
  }
}

export default TaskForm;