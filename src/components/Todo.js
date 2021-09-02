import React from "react"



function Todo (props){




    return (
       <div>
      <p style={{ textDecoration: props.tasks.completed ? "line-through" : null }} 
         onClick={()=> props.completed(props.tasks.id)}>{props.tasks.task}</p>
       </div>  
    )
}

export default Todo;