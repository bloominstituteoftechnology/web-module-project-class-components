import React from 'react'
import Todo from './Todo'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {

    const handleClick = () => {
        props.handleTasksCompleted()
    }

    return (
        <div className='todo-list'>
            {props.tasks.map((task) => (
                <Todo
                    key={task.id}
                    task={task}
                    handleTaskToggle={props.handleTaskToggle}
                />
            ))}
            <button onClick={handleClick} className='clear-btn'>Clear Completed</button>
        </div>
    )
}

export default TodoList