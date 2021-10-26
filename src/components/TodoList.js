// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='Todolist'>
            {props.tasks.map(item=> (
                <Todo handleToggle = {props.handleToggle} key={item.id} task={item} />
            ))}
        </div>
    );
};

export default TodoList;