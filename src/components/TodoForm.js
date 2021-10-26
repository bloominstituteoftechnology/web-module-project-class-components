import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      input:""
    }
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input onChange={this.handleChanges} type="text" name="task" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;