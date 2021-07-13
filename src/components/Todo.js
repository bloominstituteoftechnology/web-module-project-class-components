import React from 'react';

const Todo = props => {
    const handleClick= ()=>{
        props.handleItemToggle(props.item.id)
    }

    return (
        <div onClick={handleClick} className="item">
            <p>{props.item.name}</p>
        </div>
    )
}
export default Todo;