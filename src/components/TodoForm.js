import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      taskText: "",
    };
  }
  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.taskText);
    this.setState({
      itemText: "",
    });
  };

  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="taskText"
          value={this.state.taskText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
      <button onClick={this.props.clearCompleted}>Clear completed</button>
      </div>
    );
  }
}

export default ListForm;