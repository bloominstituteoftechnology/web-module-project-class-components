import React from 'react';

const ToDoForm = props => {
  return (
    <div>

      <div>ToDoForm</div>
      <input
        type="text"
        placeholder="task to add"
        onChange={props.handleChanges}
        />

      <button type="submit" onClick={props.handleSubmit}>
        Submit
      </button>

      <button>
        Clear Complete Tasks
      </button>

    </div>
  );
};

export default ToDoForm;
