// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Todo from './Todo'
import React from 'react'

  function toDoList (props) {

    const { list, handleToggle } = props

      return(
          <div>
        {list.map( (item) =>  
        
        {return <Todo task={item.task}/>}

        )}
        </div>
      )
  }

  export default toDoList