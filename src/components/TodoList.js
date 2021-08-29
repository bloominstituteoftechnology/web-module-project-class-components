// your components will all go in this `component` directory.
import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    const handleClick = () => {
        // console.log('Clear Clicked in TodoList.js');
        props.clearCompleted();
        // console.log('props.clearCompleted passed correcly component connected');
        
    }

    return (
        <div className='todo-list'>
            {props.todos.map(todo=> (
                <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo}/>
            ))}
            <button className="clear-btn" onClick={handleClick}>Clear Completed</button>
            
        </div>
    )
}

export default TodoList
