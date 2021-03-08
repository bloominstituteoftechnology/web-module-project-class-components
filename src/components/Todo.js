import React from "react";

const Todo = (props) => {
  return (
    <div>
      <h4
        style={
          props.todo.completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "" }
        }
      >
        {props.todo.name}
      </h4>
      <button onClick={() => props.handleCompleted(props.todo.id)}>
        {" "}
        {props.todo.completed ? "Not " : ""}Completed
      </button>
    </div>
  );
};

export default Todo;
