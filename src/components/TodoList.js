// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return(
        <div className="Todo-List">
            {props.todo.map(item => {
               return <Todo key={item.id} toggleItem={props.toggleItem} item={item}/>
            })}
        </div>
    )
}

export default TodoList