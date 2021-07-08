import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { inputValue: "" };
  }

  handlesChanges = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddItem(this.state.inputValue);
    this.setState({ inputValue: "" });
  };
  // you will need a place to store your state in this component.
  // design `TodoForm` to be the parent component of your TodoFormlication.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handlesChanges}
          value={this.state.inputValue}
          type="text"
          name="item"
        />
      </form>
    );
  }
}

export default TodoForm;
