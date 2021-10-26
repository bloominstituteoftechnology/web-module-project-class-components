import React from "react";
import TodoList from "./components/TodoList";

export default function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo) => (
        <todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
