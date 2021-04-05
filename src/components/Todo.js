import React from "react";
import "./Todo.css";

export default function Todo(props) {
  return (
    <div
      onClick={() => {
        props.toggleToDo(props.todo.id);
      }}
      className={`todo ${props.todo.completed ? "completed" : ""}`}
    >
      {props.todo.task}
    </div>
  );
}
