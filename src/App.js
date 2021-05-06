import React from 'react';
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      idCounter: 1001,
      todos: [{
        task: 'Learn more about React Class Components',
        id: 1000,
        completed: false
      }],
      newTask: {
        task: '',
        id: '',
        completed: false
      }
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  updateNewTaskText = (event) => {
    event.preventDefault();
    this.setState({ newTask: { task: event.target.value, id: '', completed: false } });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({})
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm updateNewTask={this.state.updateNewTaskText} />
      </div>
    );
  }
}

export default App;
