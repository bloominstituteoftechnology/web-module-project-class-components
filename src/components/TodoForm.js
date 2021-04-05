import React from "react";

export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      todo: "",
    });
  };

  changeHandler = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="todo"
          onChange={this.changeHandler}
          value={this.state.todo}
          placeholder="Enter Action"
        />
        <button>Add Task</button>
      </form>
    );
  }
}
