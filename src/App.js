import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}
export default App;
