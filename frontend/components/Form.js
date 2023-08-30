import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }
  handleChange = (evt) => {
    evt.preventDefault();
    this.setState({ ...this.state, item: evt.target.value });
  };

  submitForm = (evt) => {
    evt.preventDefault();
    this.props.addItem(evt, this.state.item);
    this.setState({ ...this.state, item: "" });
  };
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <h1>Add Next To Do Item To List</h1>
        </div>
        <br />
        <input
          type="text"
          name="todo"
          value={this.state.item}
          onChange={this.handleChange}
          placeholder="Add item"
        />
        <button>Add</button>
      </form>
    );
  }
}
