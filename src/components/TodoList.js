// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className={`TodoList ${props.TodoList.completed ? " completed" : ""}`}>
      <p>{props.todo.task}</p>
    </div>
  );
};

export default TodoList;
