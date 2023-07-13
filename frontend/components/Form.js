import React from "react";

export default class TodoForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      input: event.target.value
    })
  }

  render() {
    return(    
    <form onClick={this.handleSubmit}>
      <input 
      type="text"
      onChange={this.handleChange}
      />
      <button>Add</button>
    </form>);
  }
}
