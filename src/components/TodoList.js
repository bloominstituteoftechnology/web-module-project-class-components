// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {props.todos.map((todo) => (
        <Todo handleDone={props.handleDone} key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
/*        <button onClick={handleAddClick} className="add-btn">
        Add Todo
      </button>
      <button onClick={handleClearClick} className="clear-btn">
        Clear Completed
      </button>  */
