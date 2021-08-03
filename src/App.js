import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";

const todo = [
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
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <Todo todo={todo} />
      </div>
    );
  }
}
export default App;
