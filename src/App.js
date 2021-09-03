import React from "react";
import { mockComponent } from "react-dom/test-utils";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todo = [
  {
    name: "Mop",
    id: "1001",
    completed: false,
  },
  { name: "Cook", id: "1002", completed: false },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  toggleCompleted = (todoId) => {
    console.log("toggling", todoId);
    const newTodo = this.state.todo.map((item) => {
      if (todoId === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    // update state to toggle purchased on this item, but keep all of the other items the same
    this.setState({
      ...this.state,
      todo: newTodo,
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //update stat with each keystroke
  // addTodo = (todoName) => {
  //   const newTodo = {
  //     id: Date.now(),
  //     name: todoName,
  //     completed: false,
  //   };
  //   this.setState({
  //     ...this.state,
  //     todo: [...this.state.todo, newTodo],
  //   });
  // };

  // clearCompleted = () => {
  //   console.log("Clearing purchased items");
  //   //if item.purchased is true, then filter it out of the this ;stategroceries array
  //   this.setState({
  //     ...this.state,
  //     todo: this.state.todo.filter((todo) => !todo.completed),
  //   });
  // };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todo={this.state.todo}
        />
        <TodoForm />
        <div></div>
      </div>
    );
  }
}

export default App;
