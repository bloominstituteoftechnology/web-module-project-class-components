import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const TodoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      TodoData: TodoData,
    };
  }

  //Toggle todo
  handleToggle = (id) => {
    this.setState({
      ...this.state,
      TodoData: this.state.TodoData.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  //Add todo
  handleAddTodo = (task) => {
    const newTodo = {
      //setting the propertis for our new todo
      task: task,
      id: Math.random(),
      completed: false,
    };

    this.setState({
      ...this.state,
      TodoData: [...this.state.TodoData, newTodo],
    });
  };
  //Clear Todo completed
  handleClear = () => {
    this.setState({
      //sets the state with the original data and returns all the todos that are have completed:false.
      ...this.state,
      TodoData: this.state.TodoData.filter((todo) => {
        return !todo.completed;
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList
          data={this.state.TodoData}
          handleToggle={this.handleToggle}
          handleClear={this.handleClear}
        />
        <TodoForm handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
