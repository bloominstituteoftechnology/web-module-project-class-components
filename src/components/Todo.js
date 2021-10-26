import React from "react";
import todo from "./Todo";

function Todo(props) {
  return (
    <div>
      <p>
        {props.todo.task} todo ={todo}{" "}
      </p>
    </div>
  );
}

export default Todo;
