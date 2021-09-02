import React from 'react';

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const Todos = [
  {
    name: "Do Lambda HW",
    completed: false,
  },
  {
    name: "Unpack Boxes In Studio Room",
    completed: false,
  },
  {
    name: "Buy Susan Flowers",
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      Todos: Todos,
    };
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleTodoToggle = (name) => {
    this.setState({
      Todos: this.state.Todos.map((Todo) => {
        if (name === Todo.name) {
          return {
            ...Todo,
            completed: !Todo.completed,
          };
        }
        return Todo;
      }),
    });
  };

  handleTodoAdd = (name) => {
    const todo = {
      name: name,
      completed: false,
    };

    console.log(todo)

    const newTodos = [...this.state.Todos, todo];
    this.setState({
      Todos: newTodos,
    });
  }

  handleCompletedTodos = () => {
    const newTodos = this.state.Todos.filter((todo) => {
      return !todo.completed;
    });

    this.setState({
      Todos: newTodos,
    });
  };



  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <TodoForm handleTodoAdd={this.handleTodoAdd}
          handleCompletedTodos={this.handleCompletedTodos}
        />
        <TodoList
          Todos={this.state.Todos}
          handleTodoToggle={this.handleTodoToggle}
        />
      </div>
    );
  }
}

export default App;
