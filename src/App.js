import React from 'react';

const todoList = [
  {
    task: 'Gym',
    id: 123,
    completed: false
  }, 
  {
    task: 'Laundry', 
    id: 456, 
    completed: false
  },
  {
    task: 'Check my brakes',
    id: 789, 
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: todoList
    }
  }



  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
