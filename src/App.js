import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// make an array of objects containing tasks for todo list
const tasks = [
  {
    task: "eat",
    id: Date.now(),
    completed: false,
  },
  {
    task: "wake up",
    id: Date.now(),
    completed: false,
  },
  {
    task: "workout",
    id: Date.now(),
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // constructor with state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  // Update state function
  addTask = (newTaskName) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { name: newTaskName, id: Date.now(), completed: false },
      ],
    });
  };

  toggleCompleted = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === taskId) {
          return {
            // copy each item in tasks array, change the completed key to be opposite using Logical NOT (!)
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          clearCompleted={this.clearCompleted}
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
