import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.submitTodo}>
        <label>Submit new task</label>
        <input
          name="todoInput"
          type="text"
          onChange={this.props.handleChanges}
          value={this.props.todoInput}
        />
        <button>ToDo added</button>
      </form>
    );
  }
}

export default TodoForm;
