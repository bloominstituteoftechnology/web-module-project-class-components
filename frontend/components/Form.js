import React from 'react'

const initialState = {inputTodo: ''}
export default class Form extends React.Component {

  state = initialState;

  handleChange = (e) => {
    this.setState({...this.state,
    inputTodo: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.inputTodo)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name='todo'
            onChange={this.handleChange}
            value={this.state.inputTodo}
          />  
          <button>Add Todo</button>
        </form>
        <button onClick={this.props.clearFinished}>Clear Finished</button>
      </div>
    )
  }
}
