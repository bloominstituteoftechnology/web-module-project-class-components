import React from "react";
import Todo from "./Todo"

const TodoList = props =>{
// eslint-disable-next-line
    const handleClick =()=>{
        props.clearCompleted();
    }

    return(
        <div className ="todo-list">
            {props.tasks.map(item =>(
                <Todo key ={item.id} toggleItem = {props.toggleItem} item = {item}/>
))}
        </div>
    );
}

export default TodoList;