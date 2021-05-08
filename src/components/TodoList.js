import React from "react";
import Todo from "./Todo";
const TodoList = ({ clearCompleted, toggleTask, tasks }) => {
  const handleClick = (e) => {
    clearCompleted();
  };
  return (
    <div className="todo-list">
      {tasks.map((todo) => (
        <Todo key={todo.id} toggleTask={toggleTask} todo={todo} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
