import React, { Component } from "react";

class Todo extends Component {
  render(props) {
    const { toggleCompleted, removeTask } = this.props;
    const { task, id, completed } = this.props.todo;
    return (
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleCompleted(e, id)}
        />{" "}
        <span
          style={
            completed
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {task}
        </span>{" "}
        <button
          onClick={(e) => removeTask(e, id)}
          style={
            completed
              ? { display: "inline", textDecoration: "none" }
              : { display: "none" }
          }
        >
          Delete
        </button>
      </li>
    );
  }
}

export default Todo;
