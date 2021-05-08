import React from "react";

class TodoForm extends React.Component {
  state = { input: "" };

  handleChanges = (e) => {
    // update state with each keystroke
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.input);
  };
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Add New Task</label>
            <input type="text" name="todo" onChange={this.handleChanges} />
          </div>
        </form>
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default TodoForm;
