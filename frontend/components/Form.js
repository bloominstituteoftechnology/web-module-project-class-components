import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input/>
          <button>Add</button>
        </form>
      </div>
    )
  }
}
