import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todo: []
    }
  }

  handleAddTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todo: [
        ...this.state.todo,
        newTask
      ]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} />
        <TodoForm handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}

export default App;
