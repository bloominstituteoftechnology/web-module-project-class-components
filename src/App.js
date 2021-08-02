import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const tasks = [
  {
    task: "Do Dishes",
    id: 123,
    completed: false
  },
  {
    task: "Sweep",
    id: 124,
    completed: false
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
    console.log(tasks)
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleCompleted = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return({
            ...task,
            completed: !task.completed
          });
        }
        return task;
      })
    });
  }

  handleAddTask = (name) => {
    const newTask = {
      name: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => {
        return(task.completed === false);
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
          <TodoForm handleAddTask={this.handleAddTask}/>
        </div>
        <TodoList handleClear={this.handleClear} handleCompleted={this.handleCompleted}tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
