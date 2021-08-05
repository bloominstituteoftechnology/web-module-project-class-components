import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
      super()
      this.state = {
          newItem: '',
      }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addItem(this.state.newItem)
  }

  handleChange = e => {
      this.setState({
          ...this.State,
          newItem: e.target.value
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" value={this.state.newItem} onChange={this.handleChange} />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;