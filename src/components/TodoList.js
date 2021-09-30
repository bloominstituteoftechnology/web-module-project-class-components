// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div className="TodoList-container">
        {this.props.todoList.map((item) => {
          return (
            <Todo
              key={item.id}
              item={item}
              toggleItem={this.props.toggleItem}
            />
          );
        })}
        <button className="clearBtn" onClick={this.props.clearCompleted}>
          clear completed
        </button>
      </div>
    );
  }
}

export default TodoList;
