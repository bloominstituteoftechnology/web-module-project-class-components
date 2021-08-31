// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo'
import React from 'react'
class TodoList extends React.Component {

;
    render() {
        
        return (
            <div>
            {
                this.props.data.map((todo) => {
                   
                 return (<Todo crossItem={this.props.crossItem} key={todo.id} todo={todo}  />)
                })

            }

            </div>
        )
    }
}

export default TodoList