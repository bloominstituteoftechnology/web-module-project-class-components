import React from 'react'

const Task = props =>{
    return (
        <div className={`item${props.todo.completed ?  'complete' : '' }`}
        onClick={()=> props.toggleCompleted(props.task.id)}
        >
            <p>{props.task.name}</p>

        </div>
    )

}

export default Task;