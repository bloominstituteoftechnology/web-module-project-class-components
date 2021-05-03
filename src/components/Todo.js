import React, { useState } from "react";

const Todo = (props) => {
  const handleClick = () => {
    props.toggleTodo(props.item.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`item${props.item.finished ? "finished" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
