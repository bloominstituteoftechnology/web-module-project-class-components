import React from "react";
import Todo from "./Todo";
const TodoList = props => {
  // for sorting the list based on whether todo has been completed or not
  // const sortedList = props.todos.sort((a, b) => a.completed - b.completed);
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
      ))}
        <button onClick={props.clearCompleted} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};
export default TodoList;