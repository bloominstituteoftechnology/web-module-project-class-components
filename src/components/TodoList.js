import React from 'react';
import ToDo from './Todo';


const ToDoList = (props) => {
    //put things here

    return (
        <div className="todolist-container">
            {props.groceryItems.map(item => (
                <ToDo 
                    handleToggle={props.handleToggle} 
                    key={item.id} 
                    item={item}
                />
            ))}
        </div>
    )
}

export default ToDoList