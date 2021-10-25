import React from 'react';

const Item = props => {
    const handleClick = () => {
        props.toggleItem(props.item);
    }

    return (
        <div onClick = {handleClick} className = {`item${props.item.completed ? "completed" : ""}`}>
            <p>{props.item.todo}</p>
        </div>
    )
}

export default Item;