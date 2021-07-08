import React, { Component } from "react";

class Todo extends Component {
  render(props) {
    const { toggleCompleted, removeTask } = this.props;
    const { task, id, completed } = this.props.todo;
    return (
      <li className="collection-item" >
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
          <i className="material-icons">delete</i>
        </button>
      </li>
    );
  }
}

export default Todo;
