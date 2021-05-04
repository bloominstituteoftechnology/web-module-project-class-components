import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
    };
  }

  handleChange = (e) => {
    this.setState({ taskName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleAdd = (e) => {
    this.props.addTask(this.state.taskName);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.taskName}
        />
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={(e) => this.props.handleClear()}>Clear</button>
      </form>
    );
  }
}

export default TodoForm;
