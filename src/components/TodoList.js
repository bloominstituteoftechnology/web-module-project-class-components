import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props);
    return(
        <div className="todo-list">
            {props.todo.map(task => (
                <Todo toggleCompleted={props.toggleCompleted} key={task.id} task={task} />
            ))}
            <button onClick={() => props.clearCompleted()} className='clear-btn'>Clear Completed</button>
        </div>
    );
}

export default TodoList;