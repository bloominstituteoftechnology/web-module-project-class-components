// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from "react";

import Todo from "./Todo";

const TodoList = props => {

  const handleClick = () => {
    props.clearCompleted();
  }

  return (
    <div className="shopping-list">
      {props.chores.map(item => (
        <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;