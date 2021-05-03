// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

const TodoList = props => {
 
  const handleClick = ()=>{
    props.clearCompleted();
  }

  return (
    <div className="todo-list">
      {props.todo.map(task => (
        <Task key={task.id} toggleTask={props.toggleTask} task={task} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;