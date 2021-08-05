import React from "react";
import Todo from "./Todo"

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.list.map(todo => (
                <Todo key={todo.id} todo={todo} toggleFinished={props.toggleFinished} />
            ))}
            <button onClick={props.clearFinished} className="clear-button">
                Clear Finished
            </button>
        </div>
    );
};

export default TodoList;