// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {

    const handleClick = () => {
        props.handleClear()
    }

    return (
        <div>
            {props.todoItems.map((item) => {
                return (
                    <Todo key={item.id} handleToggle={props.handleToggle} item={item} />
                )
                })}
            
            <button onClick={handleClick} className="clear-btn">
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList