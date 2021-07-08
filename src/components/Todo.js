import React from "react";

const Todo = (props) => {
  // you will need a place to store your state in this component.
  // design `Todo` to be the parent component of your Todolication.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const handleClick = () => {
    console.log("handle click in todo");
    props.onClick(props.item.id);
  };

  return (
    <div onClick={handleClick}>
      <ul>
        <li> {props.item.name}</li>
        {/* <li>key {props.item.key}</li>
        <li>time {props.item.time}</li>
        <li>done {props.item.done}</li> */}
      </ul>
    </div>
  );
};

export default Todo;
