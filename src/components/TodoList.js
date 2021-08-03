// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from './Todo'

class TodoList extends React.Component{
    render(){
        return (
            <div>
                {this.props.todos.map(item => {
                    return <Todo todo={item} key={item.id} handleComplete={this.props.handleComplete} />
                })}
            </div>
        )
    }
}

// const TodoList = (props) => {

//     return (
//         <div>
//             {props.todos.map(item => {
//                 return <Todo todo={item} key={item.id} />
//             })}
//         </div>
//     )
// }

export default TodoList;