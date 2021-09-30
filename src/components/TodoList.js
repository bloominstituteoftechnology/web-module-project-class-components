// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  // handleClear = () => {
  //   this.props.clearTodo();
  // }
  return (
    <div>
    {props.todos.map(todo => (
      <Todo key={todo.id} todo={todo} toggleTodo={this.toggleTodo}/>
    ))}
      {/* {this.props.todos.map(props => (
        <Todo key={props.id} todo={props} />
      ))}
      <button onClick={this.handleClear}>
        Clear Complete
      </button> */}
    </div>
  );
};

export default TodoList;