import React from 'react';

class Todo extends React.Component {
  handleClick = () => {
    this.props.complete(this.props.todo);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p style={{
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }}>
          {this.props.todo.task}
        </p>
      </div>
    )
  }
}

export default Todo;