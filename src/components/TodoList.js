import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
   
        return(
            <div>
                {props.todoItems.map(item => (
                    <Todo item={item} key={item.id} handleDone={props.handleDone}/>
                ))}
                
            </div>
            )
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
