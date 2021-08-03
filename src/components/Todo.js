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
    //Click handler function to check list status
    const handleClick = () => 
    {
        props.handleLists(props.item.id);
    }


    //Return function
    return (
        <div 
        // onClick to change completed status
        onClick = {handleClick} 
        className = {`item${props.item.completed ? ' completed' : ''}`}
        >
        
        <p>{props.item.task}</p>
        </div>
    )
}

//Export the function
export default Todo;
