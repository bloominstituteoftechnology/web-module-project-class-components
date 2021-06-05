import React from 'react';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todo = [
  {
    task: "learn class components",
    id: 123,
    completed: false,
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }

  constructor() {
    super();
    this.state = { todo: todo };
  }

  //class update on the states:

  addTask = (newTaskName) => {
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: newTaskName,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };
  //make the completed tasks
  toggleCompleted = (taskId) => {
    this.setState({
      todo: this.state.todo.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
};

//getting rid of the completed task
clearCompleted = () => {
  this.setState({
    todo: this.state.todo.filter((task) => !task.completed),
  });
};

render() {
  return(
    <div className="App">
      <h2>Here is your Todo app</h2>

      <TodoForm addTask={this.addTask} />
      <TodoList
              todo={this.state.todo}
              toggleCompleted={this.toggleCompleted}
              clearCompleted={this.clearCompleted}
              />
    </div>
  );
}
}

export default App;
