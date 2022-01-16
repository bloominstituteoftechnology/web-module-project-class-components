import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    return (
        <div>
          {props.checkList.map(item => (
              <Todo handleToggle={props.handleToggle} key={item.id} item={item} />
          ))}
        </div>
    )
}

export default TodoList;