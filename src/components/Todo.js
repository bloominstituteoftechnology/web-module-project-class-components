import React from 'react';


const Todo = (props) => {
    // console.log(props); // Displays the two hard coded items with are also named "item." Anything submitted also gets logged as a new item.

    const handleClick = (e) => {
        e.preventDefault();
        props.toggleItem(props.item.id);
    }

    return (
        <div onClick={handleClick} className={`item${props.item.completed? ' completed' : ''}`}>   {/* If item completed = true, then add the class name "completed" - otherwise add nothing. */}
            <h3>{props.item.task} </h3>
        </div>

    )
}


export default Todo;