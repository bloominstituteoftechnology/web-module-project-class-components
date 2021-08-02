import React, { useState } from "react";

const Todo = (props) => {
  const handleClick = (e) => {
    // console.log(props.item.name);
    props.handleDone(props.todo.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      {/* <p>{props.todo.task}</p> */}
      <p
        key={props.todo.id}
        onClick={handleClick}
        style={
          props.todo.completed
            ? { textDecorationLine: "line-through" }
            : { textDecorationLine: "" }
        }
      >
        {props.todo.task}
      </p>
    </div>
  );
};

export default Todo;
