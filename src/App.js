import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todoData = [
  { task: "wash car", id: Date.now(), completed: false },
  { task: "clean bathroom", id: 2, completed: false },
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: todoData,
    };
  }

  addTask = (taskName) => {
    this.setState({
      todoData: [
        ...this.state.todoData,
        { task: taskName, id: Date.now(), completed: false },
      ],
    });
  };

  handleClear = (e) => {
    this.setState({
      todoData: this.state.todoData.filter((item) => {
        return !item.completed;
      }),
    });
  };

  toggleTask = (taskId) => {
    this.setState({
      todoData: this.state.todoData.map((item) => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} handleClear={this.handleClear} />
        <TodoList toggleTask={this.toggleTask} todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
