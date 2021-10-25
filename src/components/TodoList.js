import React from "react"
import Todo from "./Todo"

const TodoList = props => {
return(
    <div className = "todo-list">
      {props.items.map(item => (<Todo handleToggleItem={props.handleToggleItem} key={item.id} item={item}/>))}
    </div>


)}
export default TodoList;
