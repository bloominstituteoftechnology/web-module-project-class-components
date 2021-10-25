// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Todo from './Todo'
import React from 'react'

const originalList = [

    {
      task: 'Clean Room',
      id: 1001,
      completed: false
    },
    {
      task: 'Vacuum',
      id: 1002,
      completed: false
    },
    {
        task: 'Meal Prep',
        id: 1003,
        completed: false
      },
      {
        task: 'Plan Weekend',
        id: 1004,
        completed: false
      },
      {
        task: 'Brush Teeth',
        id: 1005,
        completed: false
      },

  ];

  function toDoList () {

      return(
          <div>
        {originalList.map( (item) =>  <Todo task={item.task}/>
        )}
        </div>
      )
  }

  export default toDoList