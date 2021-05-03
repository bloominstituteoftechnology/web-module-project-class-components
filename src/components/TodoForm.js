import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form>
        <input type="text" />
        <button onClick={this.props.handleClick}>Add</button>
        <button onClick={this.props.handleClick}>Clear</button>
      </form>
    );
  }
}

export default TodoForm;
