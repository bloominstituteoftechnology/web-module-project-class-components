import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todoText: "text",
    };
  }
  handleChanges = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="todo-input"> add todo: </label>
        <input
          id="todo-input"
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
      </form>
    );
  }
}
