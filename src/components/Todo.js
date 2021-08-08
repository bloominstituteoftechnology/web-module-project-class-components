import React from 'react'

const Todo = props => {
    return (
        <div 
            onClick={() => props.toggleCompletedTask(props.task.id)}    
        >
            <p className={`${props.task.completed ? 'crossed-line' : ''}`}>{props.task.todo}</p>
        </div>
    )
}
export default Todo