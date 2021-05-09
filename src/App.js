import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles.scss";
//to do list tasks
const tasks = [
  { task: "Organize Garage", id: 1528817077286, completed: false },
  { task: "Mow Lawn", id: 1528817077287, completed: false },
  { task: "Buy Groceries", id: 1528817077288, completed: false },
  { task: "Cook Dinner", id: 1528817077289, completed: false },
  { task: "Clean Kitchen", id: 1528817077290, completed: false },
  { task: "Put Kids To Bed", id: 1528817077291, completed: false },
];

//Defining Class
class App extends React.Component {
  //state
  state = { tasks: tasks };

  // Class methods to update state
  toggleTask = (id) => {
    const newTasks = this.state.tasks.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    this.setState({
      tasks: newTasks,
    });
  };

  addTask = (title) => {
    const newTask = {
      task: title,
      id: this.state.tasks.length,
      purchased: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  clearCompleted = () => {
    const newTasks = this.state.tasks.filter((todo) => {
      return todo.completed === false;
    });

    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    // We Render All Components here
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          clearCompleted={this.clearCompleted}
          toggleTask={this.toggleTask}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
