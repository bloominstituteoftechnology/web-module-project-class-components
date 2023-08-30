import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const list = [
  {
    name: "Wash Dishes",
    id: 100,
    completed: false,
  },
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list,
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newList = {
      name: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      list: [...this.state.list, newList],
    });
  };

  toggleItem = (itemId) => {
    console.log(itemId);
    this.setState({
      ...this.state,
      list: this.state.list.map((items) => {
        if (itemId === items.id) {
          return { ...items, completed: !items.completed };
        }
        return items;
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => {
        if (!item.completed) return item;
      }),
    });
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <Form addItem={this.addItem} />
        </div>
        <TodoList toggleItem={this.toggleItem} list={this.state.list} />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}
