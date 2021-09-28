import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div>
        <p onClick={this.props.completeItem} style={{textDecoration: this.props.done?'line-through':'none'}}>{this.props.text}</p>
      </div>
    );
  }
}

export default Todo;