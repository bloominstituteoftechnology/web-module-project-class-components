import React from "react";

class TodoForm extends React.Component {
  state = { input: "Add Tasks Here" };

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
        <form onSubmit={this.handleSubmit} className="semantic ui-form">
          <div className="field">
            <input
              type="text"
              name="todo"
              value={this.state.input}
              onChange={this.handleChanges}
            />
          </div>
        </form>
        <button className="add-btn" onClick={this.handleSubmit}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoForm;
