import React, { useState } from "react";

const Todo = (props) => {
  const handleClick = (e) => {
    props.toggleTask(props.task.id);
  };
  return (
    <div onClick={handleClick}>
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
