// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from "./Todo";


//Define TodoList, pass in magical props
const TodoList = (props) => 
{
    //Click handler to clear 
    const handleClick = () =>
    {
        props.handleClear();
    }

    //Return function
    return (
        <div className = "todolist">
            {/* Map over list array */}
             {props.list.map(item => 
             (<Todo handleLists = {props.handleLists} key={item.id} item={item} />))}

            {/* Clear button with onclick */}
            <button onClick = {handleClick}  > CLEAR </button>
        </div>
    )
}

//Export statement
export default TodoList

