import React from 'react';
import Todo from './Todo';


const ToDoList = (props) => {
    // console.log(props); // This shows what is hard coded and then whatever we type shows up onSubmit. 

    return (
        <div>
            <button onClick={(e) => props.clearCompleted()}>Clear</button>
            {props.notes.map((item) => (
                <Todo toggleItem={props.toggleItem} key={item.id} item={item}/>
                ))}
        </div >
    )
}

export default ToDoList;