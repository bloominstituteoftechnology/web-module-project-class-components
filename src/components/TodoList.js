import React from "react";

import Todo from './Todo'

//import  render  from "@testing-library/react";


const TodoList = props => {

    return (
        <div className="Todo-list">
            {props.todos.map(todo => (
                <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
            ))}
                <button onClick={props.clearCompleted} className="clear-list">Clear Completed</button>
        </div>
            
    );
};

    


export default TodoList; 


//recieves your Todos array. 
    //iterates over the array <.map>, generating a new Todo < with spread operator> for each element in the array
    //to create the card
    //this mapping goes in the rendering/return calling the Todo Component -- <this.props.todo={todo}>
//set up this basic default code to test whether the prop drilling is executing properly.