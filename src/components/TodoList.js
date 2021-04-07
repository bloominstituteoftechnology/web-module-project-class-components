import React from 'react'
import Todo from './Todo'


const TodoList = (props) =>{

    return(
        <div >
            <div className="list-container" >
                {props.todos.map((todo)=>(
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} /> 
                ))}
            </div>
            <div className="clearBtn">
                <button onClick={props.clearCompleted}
                >Clear Completed</button> 
            </div>
        </div>
    )
}
export default TodoList