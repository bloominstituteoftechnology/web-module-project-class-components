import React from "react";

class Todo extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    handleClick = () => {
        this.props.handleToggleItem(this.props.todo.id)
    }
    render() {
      return (
        <div>
          <h1 onClick={this.handleClick}>{this.props.todo.task}</h1>
        </div>
      );
    }
  }
  
  export default Todo;