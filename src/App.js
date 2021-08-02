import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// import './components/Todo.css'

const tasks = [
  {
    task: "Groceries",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Wash car",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Constructor with state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  addTask = (title) => {
    const newItem = {
      task: title,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newItem],
    });
  };

  toggleItem = (id) => {
    const newList = this.state.tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    this.setState({
      tasks: newList,
    });
  };

  completeTask = () => {
    const newTasks = this.state.tasks.filter((item) => {
      return item.completed === false;
    });
    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    return (
      <div>
        <h2>My Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleItem={this.toggleItem} />
        <TodoForm addTask={this.addTask} completeTask={this.completeTask} />
      </div>
    );
  }
}
export default App;
