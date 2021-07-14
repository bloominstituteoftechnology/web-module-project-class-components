import React from 'react';


const Todo = props => {
    const handleClick= ()=>{
        props.handleItemToggle(props.item.id)
    }

    console.log("todo here:  "+ {props})
    return (
        <div onClick={handleClick} className="item">
            <p>{props.item.task}</p>
        </div>
    )
}
export default Todo;