import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
    console.log('props from app', props)
return(
    <div>
        <Todo  item={item.todo} key ={item.id} id={item.id} completed={item.completed} toggleItem={props.toggleItem}/>
    </div>
)
}

export default TodoList;