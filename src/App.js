import React from 'react';
import ToDoList from '../src/components/ToDoList'
import TodoForm from '../src/components/TodoForm'

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const notesArr = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { notes: notesArr }
  }

  addItem = newItemName => {
    this.setState({
      notes: [...this.state.notes, {
        name: newItemName,
        id: Date.now(), // This makes a number based on milseconds
        purchased: false
      }]
    })
  }

  render() {
    return (
      <div>
        <ToDoList notes={this.state.notes} />
        <TodoForm addItem={this.addItem} />
        {/* <h1>{this.state.task}</h1> */}

      </div>
    );
  }
}



