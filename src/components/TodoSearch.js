import React from 'react';

import './Todo.css';

const TodoSearch = (props) => {

  const { values, update } = props;

  const { search } = values;

  const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
  };

  return (
    <div className='container'>
      <input className='task-input' type='text' name='search' placeholder='Search...' value={search} onChange={onChange} />
    </div>
  );

}

export default TodoSearch;
