import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      ...this.state,
      inputValue: e.target.value
    })
  };

  // class property to submit form
  submitTodo = e => {
    e.preventDefault(); // avoid a total refresh of the app (default HTML form behavior on submit)
    // pass this.state.newTodo into a method that updates application-level state
    this.props.addTodo(this.state.inputValue);
    this.setState({inputValue: ''})
  }

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input value={this.state.inputValue} onChange={this.handleChanges} type="text" name="todo" />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;