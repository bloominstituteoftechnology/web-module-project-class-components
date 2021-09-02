import React from 'react'
	

	const Item = (props) => {
	    const handleClick = () => {
	        props.toggleItem(props.item.id)
	    };
	

	    return(
	        <div onClick={handleClick} className={`item${props.item.completed ? 'completed': ''}`}>
	            <p>{props.item.task}</p>
	        </div>
	    )
	}
	

	export default Item
