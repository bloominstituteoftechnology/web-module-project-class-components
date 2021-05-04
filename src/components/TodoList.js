import React from 'react'
import Todo from './ToDo'

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