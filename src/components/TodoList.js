// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const handleClick = () => {
    props.clearCompleted();
  };
  return (
    <div>
      <h1>Mark's To Do List</h1>
      {props.list.map((item) => (
        <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
      <button onClick={handleClick}>Clear</button>
    </div>
  );
};

export default TodoList;