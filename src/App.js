import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {
      todos: [],
      input: "",
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleChange = (e) => {
    this.setState({ ...this.state, input: e.target.value });
  };

  handleCompleted = (id) => {
    let newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: newTodos,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: this.state.input,
          id: Date.now(),
          completed: false,
        },
      ],
      input: "",
    });
  };

  handleClear = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.completed === false),
    });
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          handleCompleted={this.handleCompleted}
        />
        <TodoForm
          change={this.handleChange}
          submit={this.handleSubmit}
          input={this.state.input}
          clear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
