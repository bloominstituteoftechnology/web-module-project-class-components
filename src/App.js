import { findAllByTestId } from '@testing-library/dom';
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  handleClear = () => {
    this.setState = ({
      ...this.state,
      tasks: this.state.tasks.filter(item => !item.completed)
    });
  }

  handleAdd = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    })
  }

  handleToggle = (item) => {

    this.setState({
      ...this.state,
      tasks: this.state.tasks.map(task => {
        if (task.id === item.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    });
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd}/>
        <TodoList handleToggle={this.handleToggle} tasks={this.state.tasks} />
        <button onClick={this.handleClear} className="clear-btn">Clear Purchased</button>
      </div>
    );
  }
}

export default App;
