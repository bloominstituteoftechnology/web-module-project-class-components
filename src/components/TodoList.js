import React from 'react'
import Todo from './Todo'


const TodoList = props => {
    console.log(props.todo)
    return (<div>
      {props.todo.map(item =>(
          <Todo handleCompleted={props.handleCompleted} key={item.id} item={item}/>
      ))}
    </div>
    )
}

export default  TodoList;