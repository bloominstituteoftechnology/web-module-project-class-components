import React from 'react'
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return(
        <div className='Todo-list'>
            {props.tasks.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
        </div>
    )
}

export default TodoList