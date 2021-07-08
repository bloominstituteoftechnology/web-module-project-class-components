import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: "Find a hot older chick on Tattooine",
          id: 0,
          completed: false,
        },
        {
          task: 'Learn "The Force"',
          id: 1,
          completed: false,
        },
        {
          task: "Find some Kyber crystals",
          id: 2,
          completed: false,
        },
        {
          task: "Murder all the padawans per Order 66",
          id: 3,
          completed: false,
        },
        {
          task: "Find the droids I'm looking for",
          id: 4,
          completed: false,
        },
        {
          task: "Defeat the rebel scum",
          id: 5,
          completed: false,
        },
      ],
    };
  }

  toggleCompleted = (e, id) => {
    let newState = { ...this.state };
    const updatedState = newState.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedState });
  };

  removeTask = (e, id) => {
    let newState = { ...this.state };
    newState.todos = newState.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newState.todos });
  };

  clearCompleted = () => {
    let newState = { ...this.state };
    newState.todos = newState.todos.filter((todo) => todo.completed !== true);
    this.setState({ todos: newState.todos });
  };

  addTodo = (e, value) => {
    e.preventDefault();
    let newTodos = [...this.state.todos];
    newTodos.push({ id: Date.now(), task: value, completed: false });
    console.log(newTodos);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="container">
        <h3 className="center-align">Welcome to your Todo App!</h3>
        {this.state.todos.length > 0 ? <div className="todo-list">
          <TodoList
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            removeTask={this.removeTask}
          />
          <button className="btn" onClick={this.clearCompleted}>
            <i className="material-icons left">delete_sweep</i>Clear Completed
          </button>
        </div> : <div className="no-tasks">
          <h4>Looks like you're all done!</h4>
        </div> }
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
