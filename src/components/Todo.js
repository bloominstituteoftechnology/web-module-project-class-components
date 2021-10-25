import React from "react";

const Todo = props =>{
    const handleClick = () =>{
        props.handleToggleItem(props.item)
    }
    return (
        <div onClick= {handleClick} className={`item${props.item.completed? 'completed': ' '}`} >
            
        <h2>{props.item.task}</h2>
        </div>
    )
}


export default Todo;