// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
// import React from 'react';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  
  const handleClick = ()=> {
    props.handleClear();
  }



  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo handleToggleComplete={props.handleToggleComplete} key= {todo.id} todo={todo}/>
      ))}

    </div>
  )
};

export default TodoList;