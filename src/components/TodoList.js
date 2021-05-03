import React from 'react';
import Todo from './Todo';

// feel free to change this component.js into TodoList.js
const TodoList = props => {

    const handleClick = () => {
        props.clearCompleted()
    }

    return(
        <div className='your-list'>
            <h2>Your List</h2>
            <button onClick={handleClick}>Clear Completed</button>
            <div>
                {props.todoData.map(item => {
                    return (
                        <Todo 
                            toggleItem={props.toggleItem}
                            key={item.id}
                            item={item} 
                        />
                    )
                })}   
            </div>
        </div>
    )
}

export default TodoList;