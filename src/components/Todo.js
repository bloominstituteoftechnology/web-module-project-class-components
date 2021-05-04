import React from 'react';

import './Todo.css';

const Todo = (props) => {

  const { values, update, submit, clear } = props;

  const { task } = values;

  const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onClick = () => {
    submit();
  };

  const onClear = () => {
    clear();
  };

  return (
    <div className='container'>
      <input className='task-input' type='text' name='task' placeholder='Task...' value={task} onChange={onChange} />
      <button id='task-add' className='task-button' type='button' onClick={onClick}>Add</button>
      <button id='task-clear' className='task-button' type='button' onClick={onClear}>Clear</button>
    </div>
  );

}

export default Todo;
