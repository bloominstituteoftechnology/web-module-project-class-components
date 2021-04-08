import React from 'react'
import Todo from './Todo'

const TodoForm = props =>{
    <div className='todo-list'>
        {props.task.map(todo => (
            <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo}/>
        ))}

        <button onClick={()=> props.clearCompleted()} className= 'clr-btn'>
            
        </button>
    </div>
    
}

export default TodoForm
