import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todoList = [
  { name: "homework", time: "120 minutes", done: false, id: 1 },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoList,
    };
  }

  handleAddItem = (name) => {
    const item = { name: name, id: this.state.todoList.length, done: false };

    const newList = [...this.state.todoList, item];
    this.setState({ todoList: newList });
  };

  handleItemToggle = (itemId) => {
    // debugger;
    this.setState({
      todoList: this.state.todoList.map((item) => {
        if (itemId.id === item.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      }),
    });
  };

  handleClearItems = () => {
    const newtodoList = this.state.todoList.filter((item) => {
      return !item.done;
    });

    this.setState({
      todoList: newtodoList,
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          list={this.state.todoList}
          handleItemToggle={this.handleItemToggle}
        />
        <TodoForm
          handleClearItems={this.handleClearItems}
          handleAddItem={this.handleAddItem}
        />
      </div>
    );
  }
}

export default App;
