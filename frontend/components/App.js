import React from 'react';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(){
    super();
    const date = new Date();
    const timestamp = date.getTime();
    this.state = [
      {
        name: 'Brush Teeth',
        id: timestamp,
        completed: false
      }
    ];
  }



  render() {
    return (
      <div className='App'>
        <TodoList todoItems={this.state} />
      </div>
    )
  }
}
