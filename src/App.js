import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


const todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  handleAddTask = (task) => {
    const item = {
      task: task,
      id: Math.floor(Math.random() * 100),
      completed: false
    }

    const newItem = [...this.state.todos, item]
    this.setState({todos: newItem})

  }
  render() {
    return (
      <div>
        <h2>To Do list:</h2>
        <TodoForm handleAddTask={this.handleAddTask}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
