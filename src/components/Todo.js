import React, { useState } from "react";

const Todo = (props) => {
  const handleClick = () => {
    props.toggleTask(props.todo.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`task${props.todo.completed ? "completed" : ""}`}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
