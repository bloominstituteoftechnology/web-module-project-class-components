import React from "react";

import Todo from "./Todo";

const TodoList = props => {

    const handleClick = () => {
        props.clearCompleted();
    }

    return (
        <div className="shopping-list">
            {props.chores.map(item =>(
                <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
            ))}
            <button onClick={handleClick} className="clear-btn">
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;