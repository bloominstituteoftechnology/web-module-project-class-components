// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = props => {
  const [todo, setTodo] = useState({
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  });

  const handleClick = () => {
    setTodo({
      ...todo,
      purchased: true
    });
  };

  return (
    <div className={`TodoList ${props.todos.completed ? " completed" : ""}`}>
      <p>{props.todos.task}</p>
    </div>
  );
};

export default TodoList;
