import React from 'react';

import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {

    return (
        <div>
        {
        props.list.map(item => {
         return <Todo handleToggle={props.handleToggle} item={item} key={item.id} />
        })
        }
        </div>
    )

}

export default TodoList;