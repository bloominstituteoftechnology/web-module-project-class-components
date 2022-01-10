import React from "react";

class Todo extends React.Component {
    handleClick = () => {
      this.props.handleToggleTodo(this.props.todo);
    }
    render() {
        return (
            <div onClick={this.handleClick} className={`task${this.props.todo.completed ? 'completed' : ''}`}>
            <p>{this.props.todo.task}</p>
            </div>
        );
    }
}

// const Todo= props => {
//     const handleClick = () => {
//       props.handleToggleTodo(props.todo);
//     }
  
//     return (
//       <div onClick={handleClick} className={`task${props.todo.completed ? 'completed' : ''}`}>
//         <p>{props.todo.task}</p>
//      </div>
//     );
//   };
  
export default Todo;