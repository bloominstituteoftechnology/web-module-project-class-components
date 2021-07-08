import React from "react";
import TodoList from "./components/TodoList";

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
    this.setState({todos:updatedState});
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
  }

  render() {
    return (
      <div className="container" >
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          removeTask={this.removeTask}
        />
        <button className="btn" onClick={this.clearCompleted} >
          <i className="material-icons">delete_sweep</i>
        </button>
      </div>
    );
  }
}

export default App;
