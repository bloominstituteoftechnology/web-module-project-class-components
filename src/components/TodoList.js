import React from "react";
import Todo from "./Todo";

// receives your Todos array and iterates over the
//list generating a new `<Todo />` for each element in the array.

const TodoList = props =>
{
    //handleClick
    const handleClick = () =>
    {
        props.clearCompleted(); //clears items that have been completed
        // console.log(props.todoarr);
        //from App.js
    }

    return(
        <div>
            {props.todoarr.map(item =>(
                <Todo toggleItem={props.toggleItem} key={item.id} item={item}/>
            ))}
            <button onClick={handleClick} className="clear-button">
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;
