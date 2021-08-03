import React from 'react'

class Todo extends React.Component {

    onClick = () => {
        this.props.handleComplete(this.props.todo.id)
    }

    render(){
        return (
            <div onClick={this.onClick} className={this.props.todo.completed ? 'completed' : ''}>
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}
// const Todo = (props) => {
//     return (
//         <div>
//             <p>{props.todo.task}</p>
//         </div>
//     )
// }

export default Todo;