import React from "react";

import Todo from "./Todo";

const TodoList = props => {


  return (
    <div className="todo-list">
      {props.todoItems.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={props.clearItem} className="clear-btn">
        Clear Purchased
      </button>
    </div>
  );
};

export default TodoList;