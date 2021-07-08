import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super()
    this.state = {
      input: ''
    }
  };

  handleChanges = e => {
    this.setState({
      input: e.target.value
    })
  };

  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddItem(this.state.inputValue)
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChanges} type="text" name="item"/>
        <button onClick={this.handleSubmit}>Add Todo</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default ListForm;