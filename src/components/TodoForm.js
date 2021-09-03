import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {};
  }

  handleChanges = (e) => {
    // update state with each keystroke
    this.setState({ todo: e.target.value });
    // this.props.addTodo(this.state);
  };
  submitTodo = (e) => {
    e.preventDefault();
    this.setState({ todo: "" });
    this.props.addTodo(this.state.todo, e);
  };
  // class property to submit form

  render() {
    return (
      <form>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChanges}
        />
        <button onClick={() => this.props.submitTodo()}>Add Todo</button>
        <button onClick={() => this.props.clearCompleted()}>
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
