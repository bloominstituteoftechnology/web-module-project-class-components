import React from 'react';
import './Todo.css';

export default class TodoForm extends React.Component {
constructor(props) {
  super(props);
  this.state= {
    text: ''
  }  
  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
  // this.clear = this.clear.bind(this);
}
onSubmit = (e) =>{
  e.preventDefault();
 this.props.addText(this.state.text)
  this.setState({text: ''})
}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value});
}

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <input 
          id='new-todo'
          type='text'
          name= 'text'
          value={this.state.text}
          onChange={this.onChange} 
          placeholder='...todo'
          />
         <button> Add Todo</button>
         <button onClick={this.props.clear} > Clear Complete</button>
        </form>
      </div>
    )
  }
}