import React from "react";
import "../components/Todo.css";

const Todo = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.toggleCompleted(props.task.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.name}</p>
    </div>
  );
};

export default Todo;
