// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'



const TodoList = (props) => {

    return(
        <div classname='todo-list'>
            TodoList
            {/* {props.todoList.map((item) => {
                <Todo />
            })} */}
        </div>
    );
};

export default TodoList;