import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    task: "Running",
    id: 1,
    completed: false,
  },
  {
    task: "Buy Groceries",
    id: 2,
    completed: false,
  },
  {
    task: "Relax",
    id: 3,
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    // if (localStorage.getItem("todo")) {
    //   this.state = {};
    // }
    this.state = {
      todos: todos,
      search: "",
    };
  }

  toggleToDo = (todoId) => {
    const newTodo = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else return todo;
    });
    this.setState({
      todos: newTodo,
    });
  };

  clearToDo = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((item) => !item.completed),
    });
  };

  addingTask = (task) => {
    this.setState({
      todos: [
        ...this.state.todos,

        {
          task: task,
          id: this.state.todos.length,
          completed: false,
        },
      ],
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  searchChangeHandler = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <input
          type="text"
          placeholder="Search.."
          onChange={this.searchChangeHandler}
        />
        <TodoForm addingTask={this.addingTask} />
        <TodoList
          search={this.state.search}
          todos={this.state.todos}
          clearToDo={this.clearToDo}
          toggleToDo={this.toggleToDo}
        />
      </div>
    );
  }
}

export default App;
