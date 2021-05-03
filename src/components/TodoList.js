// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const handleClick = () => {
    props.clearTodo();
  };

  return (
    <div className="todo-list">
      {props.todo.map((item) => (
        <Todo key={item.id} toggleTodo={props.toggleTodo} item={item} />
      ))}
      <button onclick={handleClick} className="clear-btn">
        Clear Todo List
      </button>
    </div>
  );
};

export default TodoList;
