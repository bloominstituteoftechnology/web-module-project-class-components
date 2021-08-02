import React from 'react'

const TodoTask = props => {
    const handleClick=()=>{
        props.handleCompleted(props.item.id);
    }
    return (
        <div onClick={handleClick}>
            <p>{props.item.task}</p>
        </div>
    )
}
export default TodoTask