import React from  'react'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//components
import Todo from './Todo'

class TodoList extends React.Component {

    render(){
        return(
            <>
            <h3>TodoList is connected</h3>
            {
                this.props.todoItems.map((item)=>{
                   return <Todo item={item} key = {item.id} toggleComplete={this.props.toggleComplete} />
                })
            }
            <button onClick = {this.props.deleteCompleted} >Delete Completed</button>
            </> 
        )
    }
}
export default TodoList;
