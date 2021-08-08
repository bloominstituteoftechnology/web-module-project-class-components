import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
     <div className='todo-list'>
         {props.tasks.map(task => (
             <Todo key={task.id} task={task} toggleCompletedTask={props.toggleCompletedTask}/>
         ))}
     </div>   
    )
}
export default TodoList