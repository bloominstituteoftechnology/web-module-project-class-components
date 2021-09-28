import React from "react";

const Todo = (props) => {
  const handleClick = () => {
    props.handleToggle(props.todo.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`item${props.completed ? "completed" : ""}`}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
