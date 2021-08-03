// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
class TodoList extends React.Component {
render(){
  return(<div>
     This is the Todo list {this.props.tasklist.map(item =>(
      <Todo task={item}/>
    ))}
   
    </div>

  )
}
} 
export default TodoList