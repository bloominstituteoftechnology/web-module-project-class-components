import React from 'react';
import Todo from './Todo';


//  These are the props being passed in:
// <ToDoList 
//     clearCompleted={this.clearCompleted}  // Returns true for all items not completed, and false for all items completed.
//     notes={this.state.notes}              // Hard coded notes/state.
//     toggleItem={this.toggleItem}
// />

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