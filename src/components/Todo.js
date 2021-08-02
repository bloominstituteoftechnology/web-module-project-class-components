/**
 * Tom Bielawski
 * Lambda School WEB45 3.1.1
 * React to-do
 * 08/02/2021
 */

//Import statements
import React from 'react'
import "./Todo.css"

//Define the Todo(), pass in magical props
const Todo = (props) => 
{
    const handleClick = () => 
    {
        props.handleLists(props.item.id);
    }


    return (
        <div 
        onClick = {handleClick} 
        className = {`item${props.item.completed ? ' completed' : ''}`}
        >
        
        <p>{props.item.task}</p>
        </div>
    )
}

//Export the function
export default Todo;
