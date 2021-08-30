import React from 'react'

const Item = props => {

    const handleClick = () => {
        props.handleToggleComplete(props.item.id)
    }

    return (
        <div onClick={handleClick} className={`finished${props.item.done ? 'done' : '' }`}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default Item
