// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component{
    render(){

        return(
            <ul>  
          {
            this.props.todos.map(todo => {
              return (<Todo todo= {todo} handleToggle= {this.props.handleToggle}/>)
            })
          }
        </ul>
        )
    }
}
export default TodoList;