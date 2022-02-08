import React from 'react'
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const initialState = {inputTodo: ''}
export default class Form extends React.Component {

  state = initialState;

  handleChange = (e) => {
    console.log('inside of handleChange');
    console.log('e', e);
    this.setState({...this.state,
    inputTodo: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.addTodo({id: uuid(), name: this.state.inputTodo, completed: false })
    // console.log(this.state);
    axios.post('http://localhost:9000/api/todos', {name: this.state.inputTodo, completed: false})
    .then(resp => {
      console.log('resp: ', resp);
      this.props.addTodo(resp.data.data);
    })
    .catch(error => {
      console.log(error);
    })

  }
  
  render() {
    // console.log('this.props: ', this.props)
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
          <button>Clear finished.</button>
        </form>
      </div>
    )
  }
}
