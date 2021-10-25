import React from 'react'

function TodoList (props) {

 const { list, handleToggle } = props

      return(
          <div>
          {list.map( item =>  
             {return <h3 onClick={handleToggle}>{item.task}</h3>}
            )}
      </div>)
  }

  export default TodoList

