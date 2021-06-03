
//- `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import ToDo from './Todo';

const ToDoList = props => {
  return (
    <div>
    {props.taskList.map(task => (
      <ToDo task={task.task} />
    ))}
    </div>
  );
};

export default ToDoList;
