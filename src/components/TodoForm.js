import React from "react";

class TodoList extends React.Component {
  // constructor with state
  constructor() {
    super();
    this.state = {
      newTaskName: "",
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke
    this.setState({
      newTaskName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.newTaskName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="task"
            type="text"
            value={this.state.newTaskName}
            onChange={this.handleChanges}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoList;
