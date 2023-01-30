import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

export default class Form extends React.Component {
  
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }

  render() { 

    return (
      <div>
        <form>
          <input onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    )
  }
}
