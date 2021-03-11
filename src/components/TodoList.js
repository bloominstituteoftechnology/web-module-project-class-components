import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
    console.log('props from app', props)
    return (
        <div className="todo-list">
        {props.todo.map((item) => (
          <Todo key={item.id} item={item.todo} id={item.id} completed={item.completed}  toggleItem={props.toggleItem} />
        ))}
      </div>
    );
}

export default TodoList;
