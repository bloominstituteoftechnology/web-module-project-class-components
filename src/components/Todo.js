import React from 'react'
const Todo = (props) => {
    return (
        <div
          // pass in the item's id
          onClick={() => props.toggleItem(props.item.id)}
          className={`${props.item.completed ? "finished" : ""}`}
        >
          <p>{props.item.task}</p>
        </div>
    );
}
export default Todo;