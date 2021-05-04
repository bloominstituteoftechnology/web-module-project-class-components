// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from './Item';
import './Todo.css';

const Todo = (props) => {

    const handleClick = ()=>{
        props.clearCompleted();
    }

    return(
    <div className="list">
        {props.list.map(item => (
            <Item key={item.id} toggleItem={props.toggleItem} item={item} />
        ))}
        <button onClick={handleClick} className="clear-btn">
        Clear Completed
      </button>

    </div>
    
    );
}

export default Todo;

