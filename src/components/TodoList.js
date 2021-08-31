// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo'
import React from 'react'
class TodoList extends React.Component {


    render() {
        
        return (
            <div>
            {this.props.data.map(item => (
                <Todo item={item} key={item.id} toggleCompleted={this.props.toggleCompleted}/>
                
            ))}
            </div>
        )
    }
}

export default TodoList