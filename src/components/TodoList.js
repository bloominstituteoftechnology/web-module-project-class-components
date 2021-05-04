// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import TodoForm from './TodoForm';

const TodoList = (props) => {

  const { values, list, toggle } = props;

  const { search } = values;

  return (
    <div>
      {
        list
          .map((item) => {
            const { task, id, completed } = item
            if (search.length > 0) {
              if (task.match(search)) { // task.startsWith(search) // task.includes(search)
                return (
                  <TodoForm key={id} task={task} id={id} completed={completed} toggle={toggle} />
                )
              }
            }
            else {
              return (
                <TodoForm key={id} task={task} id={id} completed={completed} toggle={toggle} />
              )
            }
          })
      }
    </div>
  );

}

export default TodoList;
