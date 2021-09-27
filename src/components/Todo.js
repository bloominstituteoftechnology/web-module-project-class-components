// import React from 'react';

// const Todo = props => {
//     const handleClick = () => {
//         props.handleToggle(props.item.id);
//     }

//     return(
//         <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : '' }`}>
//             <p>{props.item.task}</p>
//         </div>
//     );
// };

// export default Todo;

import React, { Component } from "react";
export class Todo extends Component {
  handleClick = () => {
    this.props.handleToggle(this.props.item.id);
  };
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={`${this.props.item.completed ? " completed" : ""}`}
      >
        <p>{this.props.item.task}</p>
      </div>
    );
  }
}
export default Todo;