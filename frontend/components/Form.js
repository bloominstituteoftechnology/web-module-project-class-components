import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

export default class Form extends React.Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd();
  }

  render() { 

    return (
      <div>
        <form>
          <input/>
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    )
  }
}
