import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todo.map(todo => (
                <Todo handleToggelTodo={props.handleToggelTodo} key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;