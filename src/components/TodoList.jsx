import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render(props) {
    const { toggleCompleted, removeTask } = this.props;
    return (
      <ul className="collection" >
        {this.props.todos.map((todo, index) => (
          <Todo
            todo={todo}
            key={index}
            toggleCompleted={toggleCompleted}
            removeTask={removeTask}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
