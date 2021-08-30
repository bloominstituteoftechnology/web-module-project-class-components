import React from 'react';
import TodoForm from './components/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleAdd = name => {
    const newTodo = {
      name: name,
      id: Date.now(),
      finished: false
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
