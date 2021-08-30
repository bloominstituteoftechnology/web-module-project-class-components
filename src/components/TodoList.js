import React from 'react';

import Item from './Item';

const TodoList = props => {
        return (
            <div>
                {props.listItems.map(item => (
                    <Item toggleDone = { props.toggleDone } key = { item.id } item = { item } />
                ))}
                <button onClick = { props.handleClear }>Clear Completed</button>
            </div>
        )
}

export default TodoList;