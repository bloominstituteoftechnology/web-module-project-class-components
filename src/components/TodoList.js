// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from '../components/Todo'

const TodoList = props => {
    
    return (
        <div className='todo-list'>
            {props.obj.map(obj => (
        <Todo toggleCompleted={props.toggleCompleted} key={obj.id} obj={obj} />
      ))}
      <button onClick={() => props.clearCompleted() } className='clear-btn'
      > Clear Completed Objective </button>
        </div>
    )
}

export default TodoList;