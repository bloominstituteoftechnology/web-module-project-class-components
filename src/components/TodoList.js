import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todoList.map(tasks => (
        <Todo handleToggleTask={props.handleToggleTask} key={tasks.id} tasks={tasks} />
      ))}
    </div>
  );
};

export default TodoList;