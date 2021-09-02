import React from 'react';


const Todo = (props) => {
    // console.log(props); // Displays the two hard coded items which are also named "item." Anything submitted also gets logged as a new item.

    const handleClick = (e) => {
        e.preventDefault();
        props.toggleItem(props.item.id);
    }

    return (
        <div className="cta">
            <div onClick={handleClick} className={`item${props.item.completed? ' completed' : ''}`}>   {/* If item completed = true, then add the class name "completed" - otherwise add nothing. */}
                <h3>{props.item.task} </h3>
            </div>
        </div>


    )
}


export default Todo;