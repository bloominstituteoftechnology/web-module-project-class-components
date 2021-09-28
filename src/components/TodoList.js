import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const handleClick = () => {
    props.handleClear();
  };

  return (
    <div className="todo-list">
      {props.data.map((todo) => (
        <Todo handleToggle={props.handleToggle} todo={todo} key={todo.id} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
