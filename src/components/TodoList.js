import React from "react";
import Todo from "./Todo";

const TodoList = props => {

  return (
    <div className="shopping-list">
      {props.tasks.map(task => (
        <Todo handleToggleItem={props.handleToggleItem} key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;

