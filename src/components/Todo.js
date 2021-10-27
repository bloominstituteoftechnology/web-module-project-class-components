import React from 'react';
import './Todo.css'
class Todo extends React.Component{



 render(){
     return(
         <div className={`task${this.props.task.taskDone ? ' completed' :''}`}
         onClick={() => this.props.handleToggleItem(this.props.task)}
         >
        <p>{this.props.task.name}</p>
        
         </div>
         
     )
 }
}

export default Todo