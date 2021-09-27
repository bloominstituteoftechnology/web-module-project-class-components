import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoItems = [
  {
    task: '',
    id: 0,
    completed: false
  },
  {
    task: 'Brush Teeth',
    id: 1,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoItems: todoItems
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleSubmit = (input) => {

    const newTodo = {
      task: input,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todoItems: [...this.state.todoItems, newTodo]
    })
  }

  render() {
    return (
      <div>
        <TodoList todoItems={this.state.todoItems}/>
        <TodoForm handleSubmit={this.handleSubmit}/>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
