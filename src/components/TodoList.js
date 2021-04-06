import React from 'react'
import Todo from './Todo'


const TodoList = (props) =>{

    return(
        <div>
            {props.todos.map((todo)=>(
               <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} /> 
            ))}
            <button onClick={props.clearCompleted}>Clear Completed</button>               
        </div>
    )
}
export default TodoList