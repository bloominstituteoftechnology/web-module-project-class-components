import React from 'react';
import './Todo.css';

const Item = (props) => {

    const handleClick = () => {
        props.toggleDone(props.item.id);
    }

    return (
        <div onClick = { handleClick } className = { `item ${ props.item.done ? 'done' : '' }` }>
            <p>{ props.item.item }</p>
        </div>
    )
}

export default Item;