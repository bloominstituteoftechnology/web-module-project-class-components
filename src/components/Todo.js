import React from "react";

const Todo = props => {

    const handleClick = ()=> {
        console.log(props.task.name);
        props.handleCompleted(props.task.id);
    }

    return (
        <div onClick={handleClick}className={`task${props.task.completed ? "completed" : ""}`}>
            <p>{props.task.name}</p>
        </div>
    )
}

export default Todo;