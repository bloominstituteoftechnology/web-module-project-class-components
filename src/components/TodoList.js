import React from 'react';
import Todo from './Todo'

const TodoList = props => {

    return (
        <div>
            <h2>
                Tasks
            </h2>
            {props.todo.map( (item, index) => 
                <Todo key={index} item={item} toggleCompleted={props.toggleCompleted}/>
                
            )}
            <br />
            <button onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
    

}



export default TodoList;