import React from 'react';
import './Todo.css';

export default class TodoForm extends React.Component {
constructor(props) {
  super(props);
  this.state= {
    text: this.props.text,
  }

}
  render(){
    return (
      <div>
        <form onSubmit={this.props.onSubmit} >
          <input 
          id='new-todo'
          type='text'
          name= 'text'
          value={this.state.text}
          onChange={this.props.onChange} 
          placeholder='...todo'
          />
         <button> Add Todo</button>
      <button > Clear Complete</button>
        </form>
      </div>
    )
  }
}