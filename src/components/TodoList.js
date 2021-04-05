// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div>
      {props.todos
        .filter((value) => {
          if (props.search === "") {
            return value;
          } else if (
            value.task.toLowerCase().includes(props.search.toLowerCase())
          ) {
            return value;
          }
        })
        .map((todo) => (
          <Todo key={todo.id} todo={todo} toggleToDo={props.toggleToDo} />
        ))}
      <button onClick={() => props.clearToDo()}>Clear</button>
    </div>
  );
}
