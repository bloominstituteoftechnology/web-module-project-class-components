// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  // debugger;
  const handleClick = () => {
    console.log("handle click in todo list");
    props.handleItemToggle(props.list[0]);
  };
  // you will need a place to store your state in this component.
  // design `TodoList` to be the parent component of your TodoListlication.
  // this component is going to take care of state, and any change handlers you need to work with your state
  return (
    <div>
      {props.list.map((item) => (
        <Todo onClick={handleClick} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
