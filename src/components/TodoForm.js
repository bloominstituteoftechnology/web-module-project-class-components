import React from 'react';

import './TodoForm.css';

const TodoForm = (props) => {

  const { task, id, completed, toggle } = props;

  const onToggle = () => {
    toggle(id, completed);
  };

  return (
    <div className='custom'>
      <label id='item' onClick={onToggle} className={completed ? 'line-through' : 'none'}>{task}</label>
    </div>
  );

}

export default TodoForm;
