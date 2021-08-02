import React, { useState } from "react";

const Todo = props => {


    return (
        <div className={`task${props.task.completed}`}>
            <p>{props.task.name}</p>
        </div>
    )
}

export default Todo;