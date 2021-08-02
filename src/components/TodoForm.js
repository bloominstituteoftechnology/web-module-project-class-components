import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      inputValue: e.target.value,
    });
    // update state with each keystroke
  };

  // class property to submit form
  handleAddClick = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.inputValue);
  };
  handleClearClick = (e) => {
    e.preventDefault();
    this.props.handleClear();
  };

  render() {
    return (
      <form>
        <input
          onChange={this.handleChanges}
          type="text"
          name="todo"
          placeholder="...todo"
        />
        <button onClick={this.handleAddClick}>Add Todo</button>
        <button onClick={this.handleClearClick}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
