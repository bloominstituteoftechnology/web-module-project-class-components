// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo"

const TodoList = props => {
  

  const handleClick = () => {
    props.handleClearItems()
  }

  return (
    <div className="chore-list">
      {props.todo.map(item => (
        <Todo key={item.id} handleItemToggle={props.handleItemToggle} item={item} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        True
      </button>
    </div>
  );
};
    
    
export default TodoList;