import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
    value:""
    };
  }

  handleChange = evt => {
    this.setState({ ...this.state, value: evt.target.value })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.sumbit(this.state.value);
    this.setState({ ...this.state, value:'' })
  }

  handleClear = evt => {
    evt.preventDefault();
    this.props.clearCompleted();
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='todo'
          value={this.state.value}
          placeholder='...todo'
          onChange={this.handleChange}
          required
        />
      <button type='submit'>Add Todo</button>
      <button onClick={this.handleClear}>Clear Completed</button>
      </form>
    </div>
    )
  }
}

export default TodoForm;