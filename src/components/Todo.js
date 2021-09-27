import React from 'react';

const Todo = (props) => {
    // console.log(props.item);

    const handleClick = () => {
        // console.log("handleClick event was fired in Todo.js", props.item.id)
        props.handleToggle(props.item.id);
    }

    return(
        <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
            {props.item.id} <br/>
            {props.item.name}
        </div>
    )
}

export default Todo;