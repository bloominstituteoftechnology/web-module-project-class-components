import React from "react";
import './Todo.css'
const ToDo = props => {

    const handleClick = ()=> {
        props.handleToggleTask(props.task);
        console.log('hey')
      }

      return (
        <div onClick={handleClick} className={`task${props.task.added ? ' added' : ''}`}>
          <p>{props.task.task}</p>
        </div>
      );
}

export default ToDo;